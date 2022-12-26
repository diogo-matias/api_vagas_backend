import * as dotenv from "dotenv";
dotenv.config();

const envsConfig = {
  DATABASE_URL: process.env.DATABASE_URL,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};

export default envsConfig;
