import { Answer } from "./answer";

export interface QuestionItem {
    readonly id: Number;
    readonly question: String;
    readonly answers: Array<Answer>;
    readonly isLocked: boolean;
    readonly questionType: String;
    readonly law: Number;
}