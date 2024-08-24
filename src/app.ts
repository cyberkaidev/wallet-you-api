import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import logger from "morgan";

import { AppError } from "./errors/app-error";
import { errorConstans } from "./constans/error-constans";
import { bitcoinRoutesV1 } from "./api/v1/bitcoin-routes";
import { stablecoinRoutesV1 } from "./api/v1/stablecoin-routes";
import { deprecated } from "./api/deprecated/bitcoin-routes";

const { internal_error } = errorConstans;

/**
 * Created app
 */
export const app = express();

/**
 * Middleware settings
 */
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

/**
 * Integrate endpoint at application
 */
app.use("/v1/bitcoin", bitcoinRoutesV1);
app.use("/v1/stablecoin", stablecoinRoutesV1);

app.use("/v1", deprecated);

/**
 * Middleware error
 */
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    return response
      .status(internal_error.statusCode)
      .json({ message: internal_error.message });
  },
);
