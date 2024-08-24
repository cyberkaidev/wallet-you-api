import "dotenv/config";
import { TatumSDK, Network, Bitcoin, Ethereum } from "@tatumio/tatum";

export class TatumSDKClient {
  async initBitcoin() {
    return await TatumSDK.init<Bitcoin>({
      network: Network.BITCOIN,
      apiKey: {
        v4: process.env.TATUM_SDK_V4,
      },
    });
  }

  async initStablecoin() {
    return await TatumSDK.init<Ethereum>({
      network: Network.ETHEREUM,
      apiKey: {
        v4: process.env.TATUM_SDK_V4,
      },
    });
  }
}
