import { createReducer } from "@ngrx/store";
import { initialExamsState } from "./exams.state";

export const examsReducer = createReducer(initialExamsState);