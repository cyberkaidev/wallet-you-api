import { TatumSDKClient } from "../clients/tatum-sdk-client";

export class GetBitcoinService {
  async getBalanceFromSDK(key: string) {
    const { initBitcoin } = new TatumSDKClient();

    const { address } = await initBitcoin();

    return await address.getBalance({ addresses: [key] });
  }

  async getTransactionsFromSDK(key: string) {
    const { initBitcoin } = new TatumSDKClient();

    const { address } = await initBitcoin();

    return await address.getTransactions({ address: key });
  }
}
