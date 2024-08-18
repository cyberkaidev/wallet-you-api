import { AddressTransaction, AddressTransactionUTXO } from "@tatumio/tatum";

export interface TransactionsServiceProps {
  publicKey?: string;
}

export interface TransactionsService {
  success?: {
    status: number;
    transactions: (AddressTransaction | AddressTransactionUTXO)[];
  };
  error?: {
    status: number;
    error: string;
  };
}
