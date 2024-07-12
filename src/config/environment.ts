export const MYSQL_DB_HOST = process.env.MYSQL_DB_HOST;
export const MYSQL_DB_USER = process.env.MYSQL_DB_USER;
export const MYSQL_DB_NAME = process.env.MYSQL_DB_NAME;
export const MYSQL_DB_PASSWORD = process.env.MYSQL_DB_PASSWORD;
export const MYSQL_DB_PORT: number = parseInt(process.env.MYSQL_DB_PORT);
export const PORT: number = parseInt(process.env.PORT) ?? 3008;
export const DB_LOG = true;
export const OPENAI_ASSISTANT_ID = process.env?.OPENAI_ASSISTANT_ID;
export const WHATSAPP_CHAT_GROUP_ID =
  process.env.WHATSAPP_CHAT_GROUP_ID;
export const BOT_NAME = process.env.BOT_NAME;