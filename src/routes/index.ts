import express from "express";
const router = express.Router();
import userRouter from "../routes/user.route";

router.use(userRouter);

export default router;
