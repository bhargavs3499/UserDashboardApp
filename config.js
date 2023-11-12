import dotenv from "dotenv";

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const EMAIL = process.env.EMAIL;
export const PASSWORD = process.env.PASSWORD;
export const ATLAS_URI = process.env.ATLAS_URI;
export const PORT = process.env.PORT;
