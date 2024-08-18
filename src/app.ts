import express from "express";
import cors from "cors";
import logger from "morgan";

import { router } from "./routes";

/**
 * Created app
 */
export const app = express();

/**
 * Middleware settings
 */
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

/**
 * Integrate endpoint at application
 */
app.use("/", router);
