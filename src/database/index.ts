import {
  MysqlAdapter as Database,
  MysqlAdapter,
} from "@builderbot/database-mysql";

import {
  MYSQL_DB_HOST,
  MYSQL_DB_NAME,
  MYSQL_DB_PASSWORD,
  MYSQL_DB_PORT,
  MYSQL_DB_USER,
} from "../config/environment";

export type IDatabase = typeof MysqlAdapter;
export const adapterDB = new MysqlAdapter({
  host: MYSQL_DB_HOST,
  user: MYSQL_DB_USER,
  password: MYSQL_DB_PASSWORD,
  database: MYSQL_DB_NAME,
  port: MYSQL_DB_PORT,
});
