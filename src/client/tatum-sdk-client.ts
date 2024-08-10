import "dotenv/config";
import { TatumSDK, Network, Bitcoin } from "@tatumio/tatum";

export function tatum() {
  async function init() {
    return await TatumSDK.init<Bitcoin>({
      network: Network.BITCOIN,
      apiKey: {
        v4: process.env.TATUM_SDK_V4,
      },
    });
  }

  return { init };
}
