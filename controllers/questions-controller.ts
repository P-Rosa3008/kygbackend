import { NextFunction, Request, Response } from "express";
import { questions } from "../utils/dummy_questions";
import { pickRandom } from "../utils/pickRandom";

const getQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!questions) {
    const error = new HttpError("Could not retrieve a list of questions", 404);
    throw error;
  }

  const questionsArray = pickRandom(questions, 10);
  res.json({ questions: questionsArray });
};

exports.getQuestions = getQuestions;
