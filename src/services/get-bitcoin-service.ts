import { TatumSDKClient } from "../clients/tatum-sdk-client";

export class GetBitcoinService {
  async getBalanceFromSDK(key: string) {
    const { init } = new TatumSDKClient();

    const { address } = await init();

    return await address.getBalance({ addresses: [key] });
  }

  async getTransactionsFromSDK(key: string) {
    const { init } = new TatumSDKClient();

    const { address } = await init();

    return await address.getTransactions({ address: key });
  }
}
