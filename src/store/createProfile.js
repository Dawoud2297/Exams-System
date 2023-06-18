import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProfile, getProfile } from "../http/createProfile";


export const createProfileReq = createAsyncThunk("createProfile/createProfileReq", async (profileData, { rejectWithValue }) => {
    const res = await createProfile(profileData);
    return res
})

export const getProfileReq = createAsyncThunk("createProfile/getProfileReq", async (token, { rejectWithValue }) => {
    const res = await getProfile(token);
    return res.user;
})


const initialState = {
    userProfile: []
}
const createProfileSlice = createSlice({
    name: "createProfile",
    initialState,
    extraReducers: {
        [createProfileReq.pending]: (state) => {

        },
        [createProfileReq.fulfilled]: (state, action) => {
        },
        [createProfileReq.rejected]: (state) => {

        },
        [getProfileReq.pending]: (state) => {

        },
        [getProfileReq.fulfilled]: (state, action) => {
            state.userProfile = action.payload
        },
        [getProfileReq.rejected]: (state) => {

        }
    }
})

export default createProfileSlice.reducer;