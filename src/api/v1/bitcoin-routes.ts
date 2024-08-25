import { Router } from "express";

import { GetBitcoinController } from "../../controllers/get-bitcoin-controller";

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
