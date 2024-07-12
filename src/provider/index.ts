import { createProvider } from "@builderbot/bot";
import { BaileysProvider  } from "@builderbot/provider-baileys";
import { BOT_NAME } from "../config/environment";

export type IProvider = typeof BaileysProvider;
export const adapterProvider = createProvider(BaileysProvider, {name: BOT_NAME});