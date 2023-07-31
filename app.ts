import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";

import HttpError from "./models/http-error";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const questionsRoutes = require("./routes/questions-routes");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/questions", questionsRoutes);
app.use("/api/users", usersRoutes);

app.use(() => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

export default app;