import { createBot } from "@builderbot/bot";
import { PORT } from "./config/environment";
import { adapterDB } from "./database";
import { adapterProvider } from "./provider";
import { adapterFlow } from "./flow/index";
import { httpInject } from "@builderbot-plugins/openai-assistants";

const main = async () => {
  const bot = await createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
  const { httpServer, provider } = bot;

  try {
    provider.on("receive_message", async ({ from, body, name }) => {
      console.log(`Receive Message Payload:`, { body, from, name });
    });
  } catch (error) {
    console.log(error);
  }

  bot.on("send_message", ({ answer, from }) => {
    console.log(`Send Message Payload:`, { answer, from });
  });

  httpInject(provider.server);
  httpServer(+PORT);
};

main();
