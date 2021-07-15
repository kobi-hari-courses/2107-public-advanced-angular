import { createReducer, on } from "@ngrx/store";
import { isAnswerCorrectForCurrentQuestion, isQuizDone } from "./app.helpers";
import { initialAppState } from "./app.state";
import { AppActions } from "./app.types";

export const appReducer = createReducer(initialAppState,
    on(AppActions.reset, () => initialAppState),

    on(AppActions.answerCurrentQuestion, (state, action) => ({
        ...state,
        answers: isQuizDone(state)
            ? state.answers
            : [...state.answers, {
                answerIndex: action.answerIndex,
                isCorrect: isAnswerCorrectForCurrentQuestion(state, action.answerIndex)
            }]
    }))
);