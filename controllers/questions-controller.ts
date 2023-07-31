import { Request, Response } from "express";
import { dummy_questions } from "../utils/dummy_questions";
import { pickRandom } from "../utils/pickRandom";
import HttpError from "../models/http-error";

const getQuestions = async (
  req: Request,
  res: Response,
) => {
  let questionsArray;

  if (!dummy_questions) {
    const error = new HttpError("Could not retrieve a list of questions", 404);
    throw error;
  }

  questionsArray = pickRandom(dummy_questions, 10);

  if (req.query.law) {
    const law: number = +req.query.law;
    const questions = dummy_questions.filter((question) => question.law === law);
    questionsArray = pickRandom(questions, questions.length);
  }

  res.json({ questions: questionsArray });
};

exports.getQuestions = getQuestions;
