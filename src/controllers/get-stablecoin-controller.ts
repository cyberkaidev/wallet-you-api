import { formatStablecoinTransactionHelper } from "../helpers/format-stablecoin-transaction-helper";
import { joinStablecoinBalance } from "../helpers/join-stablecoin-balance-helper";
import { joinStablecoinTransaction } from "../helpers/join-stablecoin-transaction-helper";
import { GetStablecoinProps } from "../interfaces/get-stablecoin-interface";
import { GetStablecoinService } from "../services/get-stablecoin-service";
import { errorBalanceSDKValidation } from "../validations/error-balance-sdk-validation";
import { errorTransactionsSDKValidation } from "../validations/error-transactions-sdk-validation";
import { publicKeyValidation } from "../validations/public-key-validation";

export class GetStablecoinController {
	async getBalance({ key, response }: GetStablecoinProps) {
		const { validKey } = await publicKeyValidation(key);

		const { getBalanceFromSDK } = new GetStablecoinService();

		const { data, error } = await getBalanceFromSDK(validKey);

		await errorBalanceSDKValidation(error);

		const balances = joinStablecoinBalance(data);

		return response.status(200).json({ balance: balances });
	}

	async getTransactions({ key, response }: GetStablecoinProps) {
		const { validKey } = await publicKeyValidation(key);

		const { getTransactionsFromSDK } = new GetStablecoinService();

		const { usdc, usdt } = await getTransactionsFromSDK(validKey);

		await errorTransactionsSDKValidation(usdc.error ?? usdt.error);

		const mergedTransactions = joinStablecoinTransaction({
			usdc: usdc.data,
			usdt: usdt.data,
		});

		const transactions = formatStablecoinTransactionHelper(mergedTransactions);

		return response.status(200).json({ transactions: transactions });
	}
}
