import { verifyTable } from "../utils";


export async function createTable(Model) {
  try {
    const tableExists = await verifyTable(Model);
    if (!tableExists) {
      await Model.sync(); // Crea la tabla si no existe
      console.log("✨ Se creó la tabla en la base de datos: ".green, Model.tableName);
    } else {
      console.log("✅ La tabla ya existe en la base de datos: ".cyan, Model.tableName);
    }
  } catch (error) {
    console.error("Error al crear la tabla", Model.tableName, error);
  }
}
