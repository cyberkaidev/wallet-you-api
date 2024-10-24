import {
	JoinStablecoinTransaction,
	JoinStablecoinTransactionProps,
} from "../interfaces/join-stablecoin-transaction-interface";

export function joinStablecoinTransaction({
	usdc,
	usdt,
}: JoinStablecoinTransactionProps): JoinStablecoinTransaction[] {
	return [...usdc, ...usdt].sort((x, y) => x.timestamp - y.timestamp).reverse();
}
