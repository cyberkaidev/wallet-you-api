import { Router } from "express";
import { GetBitcoinController } from "../../controllers/get-bitcoin-controller";

export const deprecated = Router();

deprecated.get("/get-balance", async (request, response) => {
  const { publicKey } = request.query;

  const typePublicKey = publicKey as string | undefined;

  const { getBalance } = new GetBitcoinController();
  return await getBalance({ key: typePublicKey, response });
});

deprecated.get("/get-transactions", async (request, response) => {
  const { publicKey } = request.query;

  const typePublicKey = publicKey as string | undefined;

  const { getTransactions } = new GetBitcoinController();
  return await getTransactions({ key: typePublicKey, response });
});
