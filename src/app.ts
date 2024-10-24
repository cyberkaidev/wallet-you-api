import "express-async-errors";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import logger from "morgan";

import { deprecated } from "./api/deprecated/bitcoin-routes";
import { bitcoinRoutesV1 } from "./api/v1/bitcoin-routes";
import { stablecoinRoutesV1 } from "./api/v1/stablecoin-routes";
import { errorConstans } from "./constans/error-constans";
import { AppError } from "./errors/app-error";

const { INTERNAL_ERROR } = errorConstans;

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
	(
		error: Error,
		_request: Request,
		response: Response,
		_next: NextFunction,
	) => {
		if (error instanceof AppError) {
			return response.status(error.statusCode).json({ message: error.message });
		}

		return response
			.status(INTERNAL_ERROR.statusCode)
			.json({ message: INTERNAL_ERROR.message });
	},
);
