// SidebarStatic.jsx
import React, { useState } from 'react';
import JINImg from '../../assets/jin.png';
import crossImg from '../../assets/cross.png';
import './sidebar.styles.css';

const SidebarStatic = ({visible, setVisible}) => {
    
  return (
    <div className={`sidebar ${visible ? 'show' : ''}`}>
      <div>
        <img src={JINImg} alt="jin" />
        <img className='cross' onClick={()=> setVisible(!visible)} src={crossImg} alt="cross" />
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Timesheet</li>
        <li>Leave</li>
        <li>Work From Home</li>
        <li>Feedback</li>
        <li>Survey</li>
        <li>Service Desk</li>
        <li>Forms</li>
        <li>Travel</li>
        <li>Expenses</li>
        <li>Resourcing</li>
      </ul>
    </div>
  );
};

export default SidebarStatic;
