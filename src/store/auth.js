import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import signup from "../http/signup";
import login from "../http/login";
import { setIdentity } from "./identity";

export const authSignup = createAsyncThunk("auth/data", async (data, { rejectWithValue, getState }) => {
    console.log(getState().auth.auth_type)
    const res = await signup(data);
    if (res.Error) return rejectWithValue(res.Error);
    return res;
})

export const authLogin = createAsyncThunk("auth/login", async (data, { rejectWithValue, getState, dispatch }) => {
    const res = await login(data);
    if (res.Error) return rejectWithValue(res.Error);
    if (getState().auth.keepUserLoggedIn) {
        localStorage.setItem('user', JSON.stringify([res.user, res.token]));
    }
    if (!getState().auth.user_auth_error) {
        localStorage.setItem("additional", JSON.stringify({ id: res.user._id, additional: { user_token: res.token, role: res.user.role } }))
    }
    if (getState().auth.auth_type === 'login') dispatch(setIdentity(res.user.role))
    // dispatch(useLoginToken(res.token))
    // console.log(res)
    return res;
})


const signupSlice = createSlice({
    name: "auth",
    initialState: {
        auth_type: '',
        user: {},
        user_token: '',
        loading: false,
        user_auth_error: '',
        keepUserLoggedIn: false,
        loginDataFulfilled: false,
        indicator: false
    },
    reducers: {
        endIndicator: (state) => {
            state.indicator = false;
        },
        selectAuthType: (state, action) => {
            state.auth_type = action.payload;
        },
        emailErrors: (state, action) => {
            state.user_auth_error = action.payload;
        },
        // Because errors stuck from login to signup and vice versa
        resetUserProps: (state, action) => {
            state.user_auth_error = '';
        },
        letUserLoggedIn: (state) => {
            state.keepUserLoggedIn = !state.keepUserLoggedIn;
        },
        signupKeepLogin: (state) => {
            localStorage.setItem('user', JSON.stringify([state.user, state.user_token]));
        }
    },
    extraReducers: {
        [authSignup.pending]: (state, action) => {
            state.loading = true;
        },
        [authSignup.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload?.user;
            state.user_token = action.payload?.token;
            state.auth_type = 'createProfile';
        },
        [authSignup.rejected]: (state, action) => {
            state.loading = false;
            state.user_auth_error = action.payload;
            console.log(action);
        },
        [authLogin.pending]: (state, action) => {
            state.loading = true;
            state.loginDataFulfilled = false;
        },
        [authLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload?.user;
            state.user_token = action.payload?.token;
            state.loginDataFulfilled = true;
            state.indicator = true;
            console.log(state.auth)
        },
        [authLogin.rejected]: (state, action) => {
            state.loading = false;
            state.loginDataFulfilled = false;
            state.user_auth_error = action.payload;
            console.log(action.payload)
        },
    }
})

export const {
    emailErrors,
    selectAuthType,
    resetUserProps,
    letUserLoggedIn,
    signupKeepLogin,
    endIndicator
} = signupSlice.actions;

export default signupSlice.reducer;