import express from "express";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const questionsControllers = require("../controllers/questions-controller");

const routes = express.Router();

routes.get("/", questionsControllers.getQuestions);

module.exports = routes;
