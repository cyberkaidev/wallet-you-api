import "dotenv/config";

import { Bitcoin, Ethereum, Network, TatumSDK } from "@tatumio/tatum";

export class TatumSDKClient {
	async initBitcoin() {
		return TatumSDK.init<Bitcoin>({
			network: Network.BITCOIN,
			apiKey: {
				v4: process.env.TATUM_SDK_V4,
			},
		});
	}

	async initStablecoin() {
		return TatumSDK.init<Ethereum>({
			network: Network.ETHEREUM,
			apiKey: {
				v4: process.env.TATUM_SDK_V4,
			},
		});
	}
}
