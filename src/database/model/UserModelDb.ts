import { DataTypes } from "sequelize";
import { dbInstance } from "../Config/Connection";


export const UserModel = dbInstance.define(
  "Users",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    number: DataTypes.STRING,
  },
  {
    tableName: "Users",
    createdAt: true,
    updatedAt: true,
  }
);

