import { createFeatureSelector, createSelector } from "@ngrx/store";
import { calcScore, currentIndex, isQuizDone } from "./app.helpers";
import { appFeatureKey, AppState } from "./app.state";

export const root = createFeatureSelector<AppState>(appFeatureKey);

export const allQuestions = createSelector(root, state => state.questions);

export const allAnswers = createSelector(root, state => state.answers);

export const currentQuestionIndex = createSelector(root, state => currentIndex(state));

export const isDone = createSelector(root, state => isQuizDone(state));

export const currentQuestion = createSelector(allQuestions, currentQuestionIndex, 
    (questions, index) => questions[index]);
export const score = createSelector(root, (state) => calcScore(state));

