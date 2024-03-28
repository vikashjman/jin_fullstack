import React from 'react';
import './timesheet.styles.css';
import { useSelector, useDispatch } from 'react-redux'
import TableRow from './TableRow/TableRow.component';
import { saveWorkData, deleteWorkData } from '../../app/work.slice';
import { horizontalCal } from '../../utils/calculateTime';


const Timesheet = () => {
    const { bauRows, salesRows } = useSelector(state => state.work);
    const rows = [...bauRows, ...salesRows];

    const dispatch = useDispatch();


    const handleSave = async () => {
        await dispatch(saveWorkData({ bauRows, salesRows }));
    }

    const handleClear = async () => {
        await dispatch(deleteWorkData())
    }

    return (
        <>
            <div className="table-container">
                <table id="timesheet-table">
                    <thead>
                        <tr>
                            <th>Project Type</th>
                            <th>Project Name</th>
                            <th>Task</th>
                            <th>Comment</th>
                            <th>Mon 05</th>
                            <th>Tue 06</th>
                            <th>Wed 07</th>
                            <th>Thu 08</th>
                            <th>Fri 09</th>
                            <th>Sat 0</th>
                            <th>Sun 11</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {bauRows?.map((work, i) =>
                            <tr key={work.work_id}>
                                {i === 0 && <td rowSpan={bauRows.length}>BAU Activity</td>}
                                <TableRow work={work} isFirstRow={i === 0} />
                            </tr>
                        )}
                        {salesRows?.map((work, i) =>
                            <tr key={work.work_id}>
                                {i === 0 && <td rowSpan={salesRows.length}>Sales Activity</td>}
                                <TableRow work={work} isFirstRow={i === 0} />
                            </tr>
                        )}
                        <tr>
                            <td>Total Hours</td>
                            <td></td>
                            <td></td>
                            <td><input type="text" /></td>
                            <td><input value={horizontalCal(rows, 'mon')} className='resize' type="text" disabled /></td>
                            <td><input value={horizontalCal(rows, 'tue')} className='resize' type="text" disabled /></td>
                            <td><input value={horizontalCal(rows, 'wed')} className='resize' type="text" disabled /></td>
                            <td><input value={horizontalCal(rows, 'thrus')} className='resize' type="text" disabled /></td>
                            <td><input value={horizontalCal(rows, 'fri')} className='resize' type="text" disabled /></td>
                            <td><input value={horizontalCal(rows, 'sat')} className='resize' type="text" disabled /></td>
                            <td><input value={horizontalCal(rows, 'sun')} className='resize' type="text" disabled /></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="btns-wrapper">

                <button className='btn btn-save' onClick={handleSave}>Save</button>
                <button className='btn btn-submit' onClick={handleClear}>Submit <i className='pi pi-arrow-right'></i></button>
            </div>
        </>
    );
}

export default Timesheet;







