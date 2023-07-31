import { Answer } from "./answer";

export interface QuestionItem {
    readonly id: number;
    readonly question: string;
    readonly answers: Array<Answer>;
    readonly isLocked: boolean;
    readonly questionType: string;
    readonly law: number;
}