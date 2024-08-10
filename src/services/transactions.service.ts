import { tatum } from "../client/tatum-sdk.client";
import { errorStructureConstans } from "../constans/error-structure.constans";
import {
  TransactionsService,
  TransactionsServiceProps,
} from "../interfaces/transactions-service.interface";

export async function transactionsService({
  publicKey,
}: TransactionsServiceProps): Promise<TransactionsService> {
  const client = tatum();

  const { empty_key, key_not_found, internal_error } = errorStructureConstans;

  if (!publicKey) {
    return {
      error: {
        status: empty_key.status,
        error: empty_key.code,
      },
    };
  }

  const { address } = await client.init();

  const { data, error } = await address.getTransactions({
    address: publicKey,
  });

  if (error?.code == "validation.failed") {
    return {
      error: {
        status: key_not_found.status,
        error: key_not_found.code,
      },
    };
  }

  if (error) {
    return {
      error: {
        status: internal_error.status,
        error: internal_error.code,
      },
    };
  }

  return {
    success: {
      status: 200,
      transactions: data,
    },
  };
}
