import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearWorks, getAllWorks, saveWorks } from '../api/index';
import { getDefaultBauValues, getDefaultSalesValues } from '../utils/default';

const initialState = {
    loading: false,
    bauRows: [],
    salesRows: [],
    error: null
};

export const fetchWorkData = createAsyncThunk('work/fetchWorkData', async () => {
    const payload = await getAllWorks();
    return payload;
});

export const saveWorkData = createAsyncThunk('work/saveWorkData', async (data) => {
    await saveWorks(data);
});

export const deleteWorkData = createAsyncThunk('work/deleteWorkData', async () => {
    await clearWorks();
});

const workSlice = createSlice({
    name: 'work',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            const defaultValues = action.payload.activity_type === "BAU" ? getDefaultBauValues() : getDefaultSalesValues();
            state[action.payload.activity_type.toLowerCase() + 'Rows'].push(defaultValues);
        },
        remove: (state, action) => {
            const { work_id, activity_type } = action.payload;
            state[activity_type.toLowerCase() + 'Rows'] = state[activity_type.toLowerCase() + 'Rows'].filter(row => row.work_id !== work_id);
        },
        update: (state, action) => {
            const { work_id, activity_type, field, value } = action.payload;
            const rows = state[activity_type.toLowerCase() + 'Rows'];
            const index = rows.findIndex(row => row.work_id === work_id);
            if (index !== -1) {
                rows[index][field] = value;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorkData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWorkData.fulfilled, (state, action) => {
                state.loading = false;
                state.bauRows = action.payload.bauRows.length ? action.payload.bauRows : [getDefaultBauValues()];
                state.salesRows = action.payload.salesRows.length ? action.payload.salesRows : [getDefaultSalesValues()];
            })
            .addCase(fetchWorkData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(saveWorkData.pending, (state) => {
                state.loading = true;
            })
            .addCase(saveWorkData.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(saveWorkData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteWorkData.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteWorkData.fulfilled, (state) => {
                state.loading = false;
                state.bauRows = [getDefaultBauValues()];
                state.salesRows = [getDefaultSalesValues()];
            })
            .addCase(deleteWorkData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { add, remove, update } = workSlice.actions;

export default workSlice.reducer;
