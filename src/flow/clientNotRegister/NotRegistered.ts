import { addKeyword, EVENTS } from "@builderbot/bot";
import { UserModel } from "../../database/model/UserModelDb";
import { setData } from "../../database/repository/user.repository";
import { flowRegisteredClients } from "../ClientRegister/registered";


export const flowNoRegisteredClients = addKeyword(EVENTS.ACTION).addAnswer(
  "Vamos a tomar sus datos para el registro",
  null,
  async (ctx, { gotoFlow, provider }) => {
    await provider.vendor.readMessages([ctx.key]);
    return gotoFlow(registerStepsFlow);
  }
);

export const registerStepsFlow = addKeyword(EVENTS.ACTION)
  .addAnswer(
    "Cual es su nombre?",
    { capture: true, },
    async (ctx, { state, flowDynamic, provider }) => {
      await provider.vendor.readMessages([ctx.key]);
      await state.update({ name: ctx.body });
    }
  ).addAction(async (ctx, { flowDynamic, state }) => {
    const name: string = await state.get("name");
    await flowDynamic(`Me confirmas que te llamas *${name}*?`);
  })
  .addAnswer(
    "Seguro que es tu nombre\n digita 1️⃣ Si  2️⃣ Editar",
    { capture: true },
    async (ctx, { gotoFlow, state, flowDynamic }) => {

      const name: string = await state.get("name");
      const data = { name: name, number: ctx.from };

      const flows = {
        "1": flowRegisteredClients,
        "si": flowRegisteredClients,
      };
      const flow = flows[ctx.body.toLowerCase()];

      if (flow) {
        await setData(data, UserModel);
        return gotoFlow(flow);
      }

      await flowDynamic("okey, comencemos de nuevo");

      return gotoFlow(registerStepsFlow);
    }
  );
