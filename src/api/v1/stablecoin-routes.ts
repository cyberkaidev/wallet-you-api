import { Router } from "express";

import { GetStablecoinController } from "../../controllers/get-stablecoin-controller";

export const stablecoinRoutesV1 = Router();

stablecoinRoutesV1.get("/get-balance/:key", async (request, response) => {
	const { key } = request.params;

	const { getBalance } = new GetStablecoinController();
	return getBalance({ key, response });
});

stablecoinRoutesV1.get("/get-transactions/:key", async (request, response) => {
	const { key } = request.params;

	const { getTransactions } = new GetStablecoinController();
	return getTransactions({ key, response });
});
