import { AddressTransaction, AddressTransactionUTXO } from "@tatumio/tatum";

export interface JoinStablecoinTransactionProps {
  usdc: (AddressTransaction | AddressTransactionUTXO)[];
  usdt: (AddressTransaction | AddressTransactionUTXO)[];
}

export type JoinStablecoinTransaction =
  | AddressTransaction
  | AddressTransactionUTXO;
