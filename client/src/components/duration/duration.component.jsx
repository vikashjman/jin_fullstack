import React from 'react'
import './duration.styles.css'
import { useSelector } from 'react-redux'
import { calculateTotalHours } from '../../utils/calculateTime'
const Duration = () => {

  const { bauRows, salesRows } = useSelector(state => state.work);
  const hours = calculateTotalHours([...bauRows, ...salesRows])

  return (
    <>
      <div className="duration-container">
        <span>Total Hours: {hours}</span>
        <div className="date-time">
          <i className="pi pi-angle-left" style={{ fontSize: '1.8rem' }}></i>
          05 Feb 2024 - 11 Feb 2024
          <i className="pi pi-angle-right" style={{ fontSize: '1.8rem' }}></i>
        </div>
      </div>
    </>
  )
}

export default Duration