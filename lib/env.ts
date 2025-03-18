import dotenv from "dotenv";

dotenv.config();

export const REDIS_URL = process.env.REDIS_URL;
export const KV_URL = process.env.KV_URL;
export const PORT = process.env.PORT || 3000;
