import { configureStore } from '@reduxjs/toolkit';
import projectReducer, { fetchProjectData } from './project.slice';
import workReducer, { fetchWorkData, saveWorkData, deleteWorkData } from './work.slice';
import taskReducer, { fetchTaskData } from './task.slice';

export const store = configureStore({
    reducer: {
        project: projectReducer,
        work: workReducer,
        task: taskReducer,
    },
});

store.dispatch(fetchProjectData());
store.dispatch(fetchWorkData());
store.dispatch(fetchTaskData());

export const workActions = {
    fetchWorkData,
    saveWorkData,
    deleteWorkData,
};
