import { decimalsHelper } from "../helpers/decimals-helper";
import { GetBalanceProps } from "../interfaces/get-bitcoin-interface";
import { GetBitcoinService } from "../services/get-bitcoin-service";
import { errorBalanceSDKValidation } from "../validations/error-balance-sdk-validation";
import { errorTransactionsSDKValidation } from "../validations/error-transactions-sdk-validation";
import { publicKeyValidation } from "../validations/public-key-validation";

export class GetBitcoinController {
	async getBalance({ key, response }: GetBalanceProps) {
		const { validKey } = await publicKeyValidation(key);

		const { getBalanceFromSDK } = new GetBitcoinService();

		const { data, error } = await getBalanceFromSDK(validKey);

		await errorBalanceSDKValidation(error);

		if (data[0].decimals) {
			const balance = decimalsHelper({
				value: data[0].balance,
				decimals: data[0].decimals,
			});

			return response.status(200).json({ balance });
		}

		return response.status(200).json({ balance: data[0].balance });
	}

	async getTransactions({ key, response }: GetBalanceProps) {
		const { validKey } = await publicKeyValidation(key);

		const { getTransactionsFromSDK } = new GetBitcoinService();

		const { data, error } = await getTransactionsFromSDK(validKey);

		await errorTransactionsSDKValidation(error);

		return response.status(200).json({ transactions: data });
	}
}
