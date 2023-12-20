import cloudinary from "cloudinary";
import env from "../utils/env.validator";
import "dotenv/config";
cloudinary.v2.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_API_KEY,
  api_secret: env.CLOUD_API_SECRET,
});

export default cloudinary;
