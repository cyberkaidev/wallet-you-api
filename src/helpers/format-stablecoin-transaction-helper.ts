import {
	FormatStablecoinTransactionHelper,
	Grouped,
} from "../interfaces/format-stablecoin-transaction-interface";
import { JoinStablecoinTransaction } from "../interfaces/join-stablecoin-transaction-interface";
import { filterAndFormatTransactions } from "./filter-and-format-transactions";

export function formatStablecoinTransactionHelper(
	data: JoinStablecoinTransaction[],
): FormatStablecoinTransactionHelper[] {
	const transactions: FormatStablecoinTransactionHelper[] = [];

	const { listFormatted } = filterAndFormatTransactions(data);

	const grouped: Grouped = listFormatted.reduce(
		(accumulator: Grouped, item) => {
			const date = item.date;

			if (!accumulator[date]) accumulator[date] = [];

			accumulator[date].push({ ...item });

			return accumulator;
		},
		{},
	);

	Object.keys(grouped).forEach(item => {
		transactions.push({
			date: item,
			items: grouped[item],
		});
	});

	return transactions;
}
