import express, { NextFunction, Request, Response } from "express";
import env from "../utils/env.validator";
import { connectDb } from "../config/db.config";
import mongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import compression from "compression";
import { ErrorHandlerMiddleware } from "../middlewares/error.middleware";
import ErrorHandler from "../utils/errors/app-error";
export const app = express();
import allRoutes from "../routes";
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());
app.use(compression());
app.use("/api/v1", allRoutes);
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorHandler(`Route ${req.originalUrl} not found`, 404));
});

app.use(ErrorHandlerMiddleware);
