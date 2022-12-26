import path from "path";
import { DataSourceOptions } from "typeorm";
import envsConfig from "../env/envs-config";

const entities = path.resolve(
  __dirname,
  "../../",
  "app/shared/database/entities/*.ts"
);
const migrations = path.resolve(__dirname, "../", "database/migrations/*.ts");

export const configTypeorm: DataSourceOptions = {
  type: "postgres",
  // url: envsConfig.DATABASE_URL,
  username: "postgres",
  password: "2003",
  port: 5432,
  database: "vagas",
  host: "localhost",

  migrations: [migrations],
  entities: [entities],
  synchronize: false,
  logging: false,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  ssl: false,
};
