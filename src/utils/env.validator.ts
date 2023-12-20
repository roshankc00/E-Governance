import { cleanEnv, str, port } from "envalid";
import "dotenv/config";
export default cleanEnv(process.env, {
  PORT: port(),
  DATABASE_URI: str(),
  CLOUD_NAME: str(),
  CLOUD_API_KEY: str(),
  CLOUD_API_SECRET: str(),
  ACCESS_TOKEN_SECRET: str(),
});
