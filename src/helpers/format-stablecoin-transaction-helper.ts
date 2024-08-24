import moment from "moment";
import { tokenAddresses } from "../constans/tokens-addresses-constans";
import {
  FormatStablecoinTransactionHelper,
  Grouped,
  TransactionItem,
} from "../interfaces/format-stablecoin-transaction-interface";
import { JoinStablecoinTransaction } from "../interfaces/join-stablecoin-transaction-interface";

export function formatStablecoinTransactionHelper(
  data: JoinStablecoinTransaction[],
): FormatStablecoinTransactionHelper[] {
  const { USDC_ETH } = tokenAddresses;

  const transactions: FormatStablecoinTransactionHelper[] = [];

  const formatted: TransactionItem[] = data.map(item => ({
    tokenId: item.tokenId,
    amount: item.amount,
    transactionSubtype: item.transactionSubtype,
    tokenName: item.tokenAddress === USDC_ETH ? "USDC" : "USDT",
    timestamp: item.timestamp,
    hours: moment(item.timestamp).format("LT"),
    date: moment(item.timestamp).format("L"),
  }));

  const grouped: Grouped = formatted.reduce((accumulator: Grouped, item) => {
    const date = item.date;

    if (!accumulator[date]) accumulator[date] = [];

    accumulator[date].push({ ...item });

    return accumulator;
  }, {});

  Object.keys(grouped).forEach(item => {
    transactions.push({
      date: item,
      items: grouped[item],
    });
  });

  return transactions;
}
