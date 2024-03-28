import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../app/work.slice';
import { generate_unique_id } from '../../utils/default';

const TaskSelect = ({ work_id, activity_type, value }) => {
    const { bauRows, salesRows } = useSelector(state => state.work);
    const { tasks } = useSelector(state => state.task);

    const [projectId, setProjectId] = useState(null);

    useEffect(() => {
        let arr = salesRows;
        if (activity_type === "BAU") {
            arr = bauRows;
        }
        const index = arr.findIndex(row => row.work_id === work_id);
        setProjectId(parseInt(arr[index]?.project_id));
    }, [work_id, activity_type, bauRows, salesRows]);

    const taskList = tasks.filter(task => task.project_id === projectId);

    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(update({ work_id, activity_type, field: e.target.name, value: e.target.value }));
    }

    console.log(taskList, projectId, work_id);

    return (
        <select key={work_id} name='task_id' value={value} onChange={(e) => handleChange(e)}>
            {taskList.map(task => (
                <option key={generate_unique_id()} value={task.task_id}>{task.task_name}</option>
            ))}
        </select>
    );
}

export default TaskSelect;