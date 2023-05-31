import { configureStore } from "@reduxjs/toolkit";
import examsType from './examsTypes';
import identity from "./identity";
import auth from "./auth";

export default configureStore({
    reducer : {
        examsType,
        identity,
        auth
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    })
})