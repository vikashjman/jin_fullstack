import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getProjects } from '../api/index.js'
const initialState = {
    loading: false,
    projects: { bauProjects: [], salesProjects:[] },
    error: null
}

const fetchProjectData = createAsyncThunk(
    'community/fetchProjectData',
    async () => {
        return await getProjects();
    }
)

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProjectData.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchProjectData.fulfilled, (state, action) => {
            state.loading = false
            state.projects = action.payload
            state.success = true
        })
        builder.addCase(fetchProjectData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default projectSlice.reducer
export { fetchProjectData }
