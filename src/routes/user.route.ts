import express, { Router } from "express";
import { UserController } from "../controllers/user.controller";
import upload from "../middlewares/multer.middleware";
const router = express.Router();

export class userRoute extends UserController {
  private router: Router;

  constructor() {
    super();
    this.router = Router() as Router;
  }

  main(): Router {
    this.router.post("/users", upload.single("image"), this.createUserHandler);
    this.router.get("/users/:id", this.findSingleUserHandler);
    this.router.get("/users", this.findAllUsersHandler);
    this.router.delete("/users/:id", this.deleteUserHandler);
    this.router.patch("/users/:id", this.updateUser);
    return this.router;
  }
}

export default new userRoute().main();
