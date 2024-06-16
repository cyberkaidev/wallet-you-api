import { Request, Response } from 'express';

/**
 * DataUserWalletRequestInterface
 */
interface ParamsDataUserWallet {
  publicKey?: string;
}

type ReqDataUserWallet = Request<{}, {}, {}, ParamsDataUserWallet>;

export interface DataUserWalletRequestInterface {
  request: ReqDataUserWallet;
  response: Response;
}
