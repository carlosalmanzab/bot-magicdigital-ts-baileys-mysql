import { createFlow } from "@builderbot/bot";
import { assitantIaFlow } from "./assitant/assistant";
import { SponsoredFlow } from "./assitant/sponsor";
import {
  flowNoRegisteredClients,
  registerStepsFlow,
} from "./clientNotRegister/NotRegistered";
import { flowRegisteredClients } from "./ClientRegister/registered";
import { flowWelcome } from "./welcome/welcome";

export const adapterFlow = createFlow([
  flowWelcome,
  flowNoRegisteredClients,
  registerStepsFlow,
  SponsoredFlow,
  flowRegisteredClients,
  assitantIaFlow,
]);
