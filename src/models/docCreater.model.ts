import mongoose, { Model, Schema } from "mongoose";
import { ICreaterBody } from "../dto/docCreater.dto";
import { ROLES } from "./user.model";

const documentCreaterSchema: Schema<ICreaterBody> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    registrationCertificate: {
      public_id: String,
      url: String,
    },
    location: {
      type: String,
      required: true,
    },
    companyInfo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: ROLES.CREATER,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    flag: {
      type: String,
    },
  },
  { timestamps: true }
);

const DocCreaterModel: Model<ICreaterBody> = mongoose.model(
  "DocCreater",
  documentCreaterSchema
);

export default DocCreaterModel;
