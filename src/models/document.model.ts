import mongoose, { Model, Schema } from "mongoose";
import { IDocumentBody } from "../dto/document.dto";

const documentSchema: Schema<IDocumentBody> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    creater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DocCreater",
      required: true,
    },
    motherAcc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fatherAcc: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    document: [
      {
        public_id: String,
        url: String,
      },
    ],
  },
  { timestamps: true }
);

const DocumentModel: Model<IDocumentBody> = mongoose.model(
  "Document",
  documentSchema
);
