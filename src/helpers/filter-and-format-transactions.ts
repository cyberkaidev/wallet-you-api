import { TransactionItem } from "../interfaces/format-stablecoin-transaction-interface";
import { JoinStablecoinTransaction } from "../interfaces/join-stablecoin-transaction-interface";
import { formatCurrency } from "./format-currency";
import { formatDate } from "./format-date";
import { getTokenNameByTokenAddress } from "./get-token-name-by-token-address";

export function filterAndFormatTransactions(data: JoinStablecoinTransaction[]) {
  const { hours, date } = formatDate();

  const formatted: TransactionItem[] = [];

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (
      element.tokenAddress &&
      (element.transactionSubtype === "incoming" ||
        element.transactionSubtype === "outgoing")
    ) {
      formatted.push({
        tokenId: element.tokenId,
        amount: formatCurrency(element.amount.replace("-", "")),
        transactionSubtype: element.transactionSubtype,
        tokenName: getTokenNameByTokenAddress(element.tokenAddress),
        timestamp: element.timestamp,
        hours: hours(element.timestamp),
        date: date(element.timestamp),
      });
    }
  }

  return { listFormatted: formatted };
}
