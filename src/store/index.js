import { configureStore } from "@reduxjs/toolkit";
import examsType from './examsTypes';
import identity from "./identity";
import signup from "./signup";

export default configureStore({
    reducer : {
        examsType,
        identity,
        signup
    }
})