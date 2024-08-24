export interface TransactionItem {
  tokenId?: string;
  amount: string;
  transactionSubtype?: "incoming" | "outgoing" | "zero-transfer";
  tokenName: "USDC" | "USDT";
  timestamp: number;
  hours: string;
  date: string;
}

export interface Grouped {
  [keys: string]: TransactionItem[];
}

export interface FormatStablecoinTransactionHelper {
  date: string;
  items: TransactionItem[];
}
