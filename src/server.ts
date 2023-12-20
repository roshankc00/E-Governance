import express from "express";
import "dotenv/config";
import { app } from "./app";
import env from "./utils/env.validator";
import ErrorHandler from "./utils/errors/app-error";

const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  next(new ErrorHandler("sjndjsd", 400));
});

app.listen(PORT, () => {
  console.log("app is up and running ", PORT);
});
