import { Router } from 'express';
import { getBalanceController } from './controllers/get-balance.controller';
import { getTransactionsController } from './controllers/get-transactions.controller';

export const router = Router();

router.get('/v1/get-balance', async (req, res) => {
  return await getBalanceController({ request: req, response: res });
});

router.get('/v1/get-transactions', async (req, res) => {
  return await getTransactionsController({ request: req, response: res });
});
