import { Question } from "../models/question.model";
import { AppState } from "./app.state";

export function currentIndex(state: AppState) {
    return state.answers.length;
}

export function currentQuestion(state: AppState): Question {
    return state.questions[currentIndex(state)];
}

export function isQuizDone(state: AppState): boolean {
    return state.answers.length >= state.questions.length;
}

export function isAnswerCorrectForCurrentQuestion(state: AppState, answerIndex: number): boolean {
    if (isQuizDone(state)) return false;

    const curQuestion = currentQuestion(state);
    return curQuestion.correctAnswer === answerIndex;
}

export function calcScore(state: AppState): number {
    const numberOfCorrect = state
        .answers
        .filter(an => an.isCorrect)
        .length;

    return Math.round(numberOfCorrect / state.questions.length * 100);
}