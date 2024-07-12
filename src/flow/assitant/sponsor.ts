import { addKeyword, EVENTS } from "@builderbot/bot";
import { assitantIaFlow } from "./assistant";
import { join } from "path";

export const SponsoredFlow = addKeyword(EVENTS.ACTION).addAnswer(
    "Que deseas, conocer, productos, membresias, acerca de nosotros, pregunta cualquier cosa",
    { capture: false, media: join("assets", "productos.jpeg")}, async (_ctx, { gotoFlow }) => {
      return gotoFlow(assitantIaFlow);
    }
  );
  
  