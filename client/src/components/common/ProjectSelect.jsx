import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../../app/work.slice';
const ProjectSelect = ({ activity_type, value, work_id }) => {
    const { projects } = useSelector(state => state.project);

    const dispatch = useDispatch();
    const options = activity_type === 'BAU' ? projects.bauProjects : projects.salesProjects;
    const handleChange = (e) => {
        const payload = { work_id, activity_type, field: e.target.name, value: e.target.value };
        dispatch(update(payload))
    }

    return (
        <select name='project_id' value={value} onChange={handleChange}>
            {options?.map((project) => <option key={project.project_id} value={project.project_id}>{project.project_name}</option>)}
        </select>
    )
}

export default ProjectSelect