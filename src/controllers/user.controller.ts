import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import ErrorHandler from "../utils/errors/app-error";
import UserModel from "../models/user.model";
import cloudinary from "../config/cloudinary.config";

export class UserController extends UserService {
  // constructor(private readonly userService: UserService) {}

  async createUserHandler(req: Request, res: Response, next: NextFunction) {
    const { age, motherAccName, fatherAccName } = req.body;
    if (!req.file) {
      return next(
        new ErrorHandler("citizenship or birthcertificate is required", 400)
      );
    }
    const user = await UserModel.findOne({
      citizenShipNumber: req.body.citizenShipNumber,
    });
    if (user) {
      return next(
        new ErrorHandler("User with citizenShipNumber already exists", 404)
      );
    }
    if (req.body.email) {
      const existUserWithThisEmail = await UserModel.findOne({
        email: req.body.email,
      });
      if (existUserWithThisEmail) {
        return next(
          new ErrorHandler("User with citizenShipNumber already exists", 404)
        );
      }
    }
    if (req.body.fileUploadType === "birthCertificate" && age >= 16) {
      return next(new ErrorHandler("Citizenship is required", 400));
    }

    if (req.body.fileUploadType === "citizenship") {
      const cloud = await cloudinary.v2.uploader.upload(req.file.path);

      req.body.citizenship = {
        public_id: cloud.public_id,
        url: cloud.secure_url,
      };
    }
    if (req.body.fileUploadType === "birthCertificate") {
      const cloud = await cloudinary.v2.uploader.upload(req.file.path);

      req.body.birthCertificate = {
        public_id: cloud.public_id,
        url: cloud.secure_url,
      };
    }

    const newUser = await super.create(req.body);
    res.status(201).json({
      success: true,
      user: newUser,
    });
  }
  async findSingleUserHandler(req: Request, res: Response, next: NextFunction) {
    const user = await super.findOne(req.params.id);
    if (!user) {
      return next(new ErrorHandler("User doesnt exist", 404));
    } else {
      res.status(200).json({
        success: true,
        user,
      });
    }
  }
  async findAllUsersHandler(req: Request, res: Response, next: NextFunction) {
    const users = await super.find();
    if (!users) {
      return next(new ErrorHandler("No User exists", 404));
    }
    res.status(200).json({
      success: true,
      users,
    });
  }
  async deleteUserHandler(req: Request, res: Response, next: NextFunction) {
    const user = await super.findOne(req.params.id);
    if (!user) {
      return next(new ErrorHandler("User with this id doesnt exist", 400));
    }
    await super.delete(req.params.id);
    res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  }
  async updateUser(req: Request, res: Response, next: NextFunction) {
    const user = await super.findOne(req.params.id);
    if (!user) {
      return next(new ErrorHandler("User with this id doesnt exist", 400));
    }
    const updUser = await super.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      updUser,
    });
  }
}
