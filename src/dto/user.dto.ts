import { Document } from "mongoose";

export interface IUserBody extends Document {
  name: string;
  email?: string;
  password: string;
  age: number;
  citizenShipNumber: string;
  motherAccName?: string;
  fatherAccName?: string;
  birthCertificate?: {
    public_id: string;
    url: string;
  };
  citizenship?: {
    public_id: string;
    url: string;
  };
  role: string;
}
