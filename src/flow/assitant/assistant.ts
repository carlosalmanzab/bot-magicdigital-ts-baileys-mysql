import { toAsk } from "@builderbot-plugins/openai-assistants";
import { addKeyword } from "@builderbot/bot";
import { OPENAI_ASSISTANT_ID } from "../../config/environment";

export const assitantIaFlow = addKeyword("@@@ChatBot33333@@@", { sensitive: true }).addAction(
  { capture: true },
  async (ctx, { flowDynamic, state, gotoFlow, provider }) => {
    await provider.vendor.sendPresenceUpdate("composing", ctx.key.remoteJid);
    console.log(ctx.body);
    //REGULAR FLOW
    const response: string = await toAsk(OPENAI_ASSISTANT_ID, ctx.body, state);
    const chunks: string[] = response.split("/\n\n+/");
    for (const chunk of chunks) {
      await flowDynamic([{ body: chunk.trim() }]);
      return gotoFlow(assitantIaFlow);
    }
  }
);

