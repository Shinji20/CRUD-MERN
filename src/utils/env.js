import dotenv from 'dotenv';
import * as process from 'process';
dotenv.config();

export const CLIENT_ORIGIN = process.env["CLIENT_ORIGIN"]
export const MONGO_DB_CONNECTION = process.env["MONGO_DB_CONNECTION"]
