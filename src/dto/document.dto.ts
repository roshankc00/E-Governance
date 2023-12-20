import mongoose, { Document, Schema, mongo } from "mongoose";

interface Photo {
  public_id: string;
  url: string;
}

export interface IDocumentBody extends Document {
  title: string;
  user: mongoose.Schema.Types.ObjectId;
  creater: mongoose.Schema.Types.ObjectId;
  motherAcc: mongoose.Schema.Types.ObjectId;
  fatherAcc: mongoose.Schema.Types.ObjectId;
  document: Photo[];
}
