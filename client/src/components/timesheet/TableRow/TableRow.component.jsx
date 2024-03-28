import React from 'react';
import { useDispatch } from 'react-redux'
import { add, remove, update } from '../../../app/work.slice';
import ProjectSelect from '../../common/ProjectSelect';
import TaskSelect from '../../common/TaskSelect';
import { calculateTime } from '../../../utils/calculateTime';

const TableRow = ({ work, isFirstRow }) => {
    const dispatch = useDispatch();

    const handleAddRow = (activity_type) => {
        dispatch(add({ activity_type }))
    }

    const handleRemoveRow = (work_id, activity_type) => {
        dispatch(remove({ work_id, activity_type }))
    }

    const handleUpdateRow = (e, work_id, activity_type) => {
        const field = e.target.name;
        const value = e.target.value;
        dispatch(update({ work_id, activity_type, field, value }))
    }
    return (
        <>
            <td><ProjectSelect key={work.work_id} work_id={work.work_id} value={work.project_id} activity_type={work.activity_type} /></td>
            <td><TaskSelect key={work.work_id} activity_type={work.activity_type} work_id={work.work_id} value={work.task_id} /></td>
            <td><input name='comment' value={work.comment} style={{ width: '60%' }} onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type='text' /></td>
            <td><input name='mon' value={work.mon} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input name='tue' value={work.tue} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input name='wed' value={work.wed} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input name='thrus' value={work.thrus} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input name='fri' value={work.fri} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input name='sat' value={work.sat} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input name='sun' value={work.sun} className='resize' onChange={(e) => handleUpdateRow(e, work.work_id, work.activity_type)} type="text" /></td>
            <td><input value={calculateTime(work)} name="total" className='resize total' type="text" disabled /></td>
            <td>
                <i className='pi pi-plus' style={{ fontWeight: 'bolder' }} onClick={() => handleAddRow(work.activity_type)}></i>
                {!isFirstRow && <i key={work.work_id} className='pi pi-minus' style={{ fontWeight: 'bolder' }} onClick={() => handleRemoveRow(work.work_id, work.activity_type)}></i>}
            </td>
        </>
    )
}

export default TableRow