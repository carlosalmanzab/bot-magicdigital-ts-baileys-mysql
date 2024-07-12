import { dbInstance } from "../Config/Connection";

//updateData User in Database
/**
 * @param {object}data
 * @param {ModelCtor<Model<any, any>>} model
 * @example await setData(
 *  {
    name: "User User",
    email: "mail@mail.com",
  },
  ContactUserModel
  * )
  */
export async function setData(data, model) {
  const transaction = await dbInstance.transaction();
  try {
    const newDate = await model.create(data, {
      transaction: transaction,
    });

    await transaction.commit();
    return newDate;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

/**
 * Obtiene la información de una persona desde la base de datos.
 * @param {object} data - Objeto que contiene los datos de búsqueda (por ejemplo, { number: 573200804949 }).
 * @param {ModelCtor<Model<any, any>>} model - Modelo de Sequelize que representa la tabla de la base de datos.
 * @returns {Promise<object|null>} - Una promesa que resuelve en los datos de la persona si se encuentra, o null si no se encuentra.
 */
export async function getData(data, model) {
  const result = await model.findOne({
    where: data,
  });
  return result ? result.dataValues : null;
}
