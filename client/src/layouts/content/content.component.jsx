import React from 'react'
import menuImg from '../../assets/hamburger.svg'
import './content.styles.css'
import Duration from '../../components/duration/duration.component'
import RectHeading from '../../components/rectangle-heading/rectangle-heading.component'
// import Timesheet from '../../components/datatable/datatable.component'
// import DataTableWithRowEditor from '../../components/datatable/datatable.component'
import ProjectDataTable from '../../archive/datatable/datatable.component'
import Timesheet from '../../components/timesheet/timesheet.component'
const Content = ({ visible, setVisible }) => {
    return (
        <>
            <div className='content-section'>
                <div className='nav'>
                    <div className="hamburger-menu" onClick={() => setVisible(!visible)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h2>Timesheet</h2>
                </div>


                <Duration/>
                <RectHeading title='Allocation Extension' />
                <RectHeading title='Timesheet' />
                <Timesheet/>

            </div>
        </>
    )
}

export default Content