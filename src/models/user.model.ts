import mongoose, { Model, Schema } from "mongoose";
import { IUserBody } from "../dto/user.dto";

export const ROLES = {
  USER: "user",
  ADMIN: "admin",
  SUPERADMIN: "superadmin",
  CREATER: "creater",
};

const userSchema: Schema<IUserBody> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLES.USER,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    requred: true,
  },
  motherAccName: {
    type: String,
  },
  fatherAccName: {
    type: String,
  },
  birthCertificate: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  citizenship: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  citizenShipNumber: {
    type: String,
  },
});

const UserModel: Model<IUserBody> = mongoose.model("User", userSchema);

export default UserModel;
