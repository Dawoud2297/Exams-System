import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import signup from "../http/signup";


export const signupData = createAsyncThunk("signup/signupData", async (data, thunkAPI) => {
    const res = await signup(data);
    return res.data;
})


const signupSlice = createSlice({
    name: "signup",
    initialState: {
        user: {
        },
        user_token : ''
    },
    extraReducers: {
        [signupData.pending]: (state, action) => {

        },
        [signupData.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.user_token = action.payload.token;
        },
        [signupData.rejected]: (state, action) => {

        }
    }
})

export default signupSlice.reducer;