import { TatumSDKClient } from "../clients/tatum-sdk-client";
import { tokenAddresses } from "../constans/tokens-addresses-constans";
import { StablecoinSDKConfig } from "../interfaces/get-stablecoin-interface";

export class GetStablecoinService {
	async getBalanceFromSDK(key: string) {
		const { initStablecoin } = new TatumSDKClient();

		const { address } = await initStablecoin();

		return address.getBalance({
			addresses: [key],
			tokenTypes: ["fungible"],
			pageSize: 50,
		});
	}

	async getTransactionsFromSDK(key: string) {
		const { initStablecoin } = new TatumSDKClient();
		const { USDC_ETH, USDT_ETH } = tokenAddresses;

		const config: StablecoinSDKConfig = {
			address: key,
			transactionTypes: ["fungible"],
			pageSize: 50,
		};

		const { address } = await initStablecoin();

		const [usdc, usdt] = await Promise.all([
			address.getTransactions({ ...config, tokenAddress: USDC_ETH }),
			address.getTransactions({ ...config, tokenAddress: USDT_ETH }),
		]);

		return { usdc, usdt };
	}
}
