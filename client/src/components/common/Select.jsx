import React from 'react'
import './common.styles.css'
const Select = ({ name, type, option_type, handleChange, val }) => {

    const BAU = ["BAU_001 People", "BAU_002 Training",
        "BAU_003 Delivery",
        "BAU_004 Sales",
        "BAU_005 Events",
        "BAU_006 Leave"]
    const BAU_tasks = ["Company", "Build & Run Training"]
    const Sales = ["Accounts", "Lead Generation"]


    const Sales_task = ["Acora", "Primer.ai", "TOM TAILOR"]

    let arr = [];
    if (type === "BAU") {
        arr = option_type === "task" ? BAU_tasks : BAU;
    }

    if (type === "sales") {
        arr = option_type === "task" ? Sales_task : Sales;
    }


    return (
        <>
            <select name={name} onChange={handleChange} value={val}>
                {arr.map((v) => {
                    return <option value={v}>{v}</option>
                })}
            </select>
        </>
    )
}

export default Select