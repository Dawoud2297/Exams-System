import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import examsTypes from "../http/examsTypes";

export const selectExamType = createAsyncThunk('examsType/selectType', async (type, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    let res = await examsTypes(type);
    if(res === 'error') rejectWithValue();
    return res.data;
})


const examsType = createSlice({
    name: 'examsType',
    initialState: { examsTypeData: null, loading: false },
    reducers: {},
    extraReducers: {
        [selectExamType.pending]: (state, action) => {
            state.loading = true;
        },
        [selectExamType.fulfilled]: (state, action) => {
            state.loading = false;
            state.examsTypeData = action.payload;
        },
        [selectExamType.rejected]: (state, action) => {
            state.loading = false;
            state.examsTypeData = 'Error';
        }
    }
});

export default examsType.reducer;