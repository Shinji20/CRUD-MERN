import dotenv from 'dotenv';
import * as process from 'process';
dotenv.config();

export const API_URL = process.env["API_URL"]