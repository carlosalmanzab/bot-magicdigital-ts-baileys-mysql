import { dbInstance } from "./Config/Connection";

// Verificar si las tablas existen en la Base de Datos
export async function verifyTable(model) {
  try {
    const tableExists = await dbInstance.getQueryInterface().showAllTables();
    return tableExists.includes(model.tableName);
  } catch (error) {
    console.error("Error al verificar las tablas:", error);
    return false;
  }
}
