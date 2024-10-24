import { Router } from "express";

import { GetStablecoinController } from "../../controllers/get-stablecoin-controller";
import { mockStablecoinBalance } from "../../mocks/stablecoin-balance";
import { mockStablecoinTransactions } from "../../mocks/stablecoin-transactions";

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

stablecoinRoutesV1.get("/mock/get-balance", async (_, response) => {
	return response.status(200).json({ ...mockStablecoinBalance });
});

stablecoinRoutesV1.get("/mock/get-transactions", async (_, response) => {
	return response.status(200).json({ ...mockStablecoinTransactions });
});
