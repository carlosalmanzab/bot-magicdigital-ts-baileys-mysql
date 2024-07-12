import { UserModel } from "../model/UserModelDb";
import { createTable } from "../repository/user.table";

const start = async () => {
  await createTable(UserModel);
};

start();
