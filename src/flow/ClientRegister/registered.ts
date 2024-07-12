import { addKeyword, EVENTS } from "@builderbot/bot";
import { getData } from "../../database/repository/user.repository";
import { UserModel } from "../../database/model/UserModelDb";
import { SponsoredFlow } from "../assitant/sponsor";
import { IProvider } from "../../provider";
import { BaileysProvider } from "@builderbot/provider-baileys";
import { WHATSAPP_CHAT_GROUP_ID } from "../../config/environment";

export const flowRegisteredClients = addKeyword<BaileysProvider>(
EVENTS.ACTION
).addAction(async (ctx, { flowDynamic, gotoFlow, provider }) => {
  const data = await getData({ number: ctx.from }, UserModel);
  if (data && data.name !== undefined && data.name !== null)
    await flowDynamic(`Hola *${data.name}*, Es un placer tenerte de vuelta`);

  const message = `*${data.name}* esté en una conversación con el bot`;

  await provider.sendMessage(WHATSAPP_CHAT_GROUP_ID, message);
  return gotoFlow(SponsoredFlow);
});

// export const flowNewUserWelcome = addKeyword(
//   EVENTS.ACTION
// ).addAction(async (ctx, { flowDynamic }) => {
//   const data = await getData({ number: ctx.from }, UserModel);

//   if (data && data.name !== undefined && data.name !== null) 
//     await flowDynamic(`Hola *${data.name}*, ¡bienvenid@!`);
  
// });
