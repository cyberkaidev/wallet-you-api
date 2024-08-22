import "dotenv/config";
import { TatumSDK, Network, Bitcoin } from "@tatumio/tatum";

export class TatumSDKClient {
  async init() {
    return await TatumSDK.init<Bitcoin>({
      network: Network.BITCOIN,
      apiKey: {
        v4: process.env.TATUM_SDK_V4,
      },
    });
  }
}
