import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllTasks } from '../api/index.js'
const initialState = {
    loading: false,
    tasks:[],
    error: null
}

const fetchTaskData = createAsyncThunk(
    'community/fetchTaskData',
    async () => {
        return await getAllTasks();
    }
)

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTaskData.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchTaskData.fulfilled, (state, action) => {
            state.loading = false
            state.tasks = action.payload
            state.success = true
        })
        builder.addCase(fetchTaskData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default taskSlice.reducer
export { fetchTaskData }
