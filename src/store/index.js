import { configureStore } from "@reduxjs/toolkit";
import examsType from './examsTypes';
import identity from "./identity";
import auth from "./auth";
import qbState from './questionsBank'
import questionActions from "./questionActions";
import createExams from "./createExams";
import openExamDrSlice from './openExamsFtDr'
import draftsSlice from './drafts';
import studentsData from './studentsData'

export default configureStore({
    reducer: {
        examsType,
        identity,
        auth,
        qbState,
        questionActions,
        createExams,
        openExamDrSlice,
        draftsSlice,
        studentsData
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})