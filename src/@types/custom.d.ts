import { Request } from "express";
import { IUserBody } from "../dto/user.dto";

declare global {
  namespace Express {
    interface Request {
      user?: IUserBody;
    }
  }
}
