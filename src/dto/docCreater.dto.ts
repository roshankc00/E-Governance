import { Document } from "mongoose";

export interface ICreaterBody extends Document {
  name: string;
  registrationCertificate: {
    public_id: string;
    url: string;
  };
  location: string;
  companyInfo: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  flag: string;
}
