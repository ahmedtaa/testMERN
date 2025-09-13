/*
dotenv is a small Node.js library.
It helps you load secret configuration values (like database passwords, API keys)
from a file called .env into process.env.
 */
import "dotenv/config";

export const config = {
  db: process.env.DB,
  port: process.env.PORT,
  clientBaseUrl: process.env.CLIENT_BASE_URL,
  jwtSecret: process.env.JWT_SECRET
};
