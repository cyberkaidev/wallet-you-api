import { Router } from "express";

import { GetBitcoinController } from "../../controllers/get-bitcoin-controller";
import { mockBitcoinBalance } from "../../mocks/bitcoin-balance";
import { mockBitcoinTransactions } from "../../mocks/bitcoin-transactions";

export const bitcoinRoutesV1 = Router();

bitcoinRoutesV1.get("/get-balance/:key", async (request, response) => {
	const { key } = request.params;

	const { getBalance } = new GetBitcoinController();
	return getBalance({ key, response });
});

bitcoinRoutesV1.get("/get-transactions/:key", async (request, response) => {
	const { key } = request.params;

	const { getTransactions } = new GetBitcoinController();
	return getTransactions({ key, response });
});

bitcoinRoutesV1.get("/mock/get-balance", async (_, response) => {
	return response.status(200).json({ ...mockBitcoinBalance });
});

bitcoinRoutesV1.get("/mock/get-transactions", async (_, response) => {
	return response.status(200).json({ ...mockBitcoinTransactions });
});
