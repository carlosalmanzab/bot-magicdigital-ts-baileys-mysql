import { addKeyword, EVENTS } from "@builderbot/bot";
import { getData } from "../../database/repository/user.repository";
import { UserModel } from "../../database/model/UserModelDb";
import { flowNoRegisteredClients } from "../clientNotRegister/NotRegistered";
import { flowRegisteredClients } from "../ClientRegister/registered";

export const flowWelcome = addKeyword(EVENTS.WELCOME).addAction(
  async (ctx, { gotoFlow }) => {
    try {
      const data = await getData({ number: ctx.from }, UserModel);
      if (data) {
        return gotoFlow(flowRegisteredClients);
      }
    } catch (error) {
      console.error("Error en flowwelcome:", error);
    }
    return gotoFlow(flowNoRegisteredClients);
  }
);
