import * as colors  from "colors";
import { Sequelize } from "sequelize";
import { DB_LOG, MYSQL_DB_HOST, MYSQL_DB_NAME, MYSQL_DB_PASSWORD, MYSQL_DB_PORT, MYSQL_DB_USER } from "../../config/environment";

// Crear instancia de Sequelize con las variables proporcionadas
export const dbInstance = new Sequelize({
  dialect: 'mysql',
  host: MYSQL_DB_HOST,
  port: MYSQL_DB_PORT,
  username: MYSQL_DB_USER,
  password: MYSQL_DB_PASSWORD,
  database: MYSQL_DB_NAME,
  logging: DB_LOG,
});

// Conexión a la base de datos
export async function checkConnection() {
  try {
    await dbInstance.authenticate();
    console.log(
      colors.bgBlue(`🚩 CONEXIÓN DB ${MYSQL_DB_NAME} WITH MySQL 🚩`).white
    );
  } catch (error) {
    console.log(colors.bgRed(`🚩 ERROR DB ${MYSQL_DB_NAME} WITH MySQL 🚩`).white, error);
  }
}

