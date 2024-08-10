import { tatum } from "../client/tatum-sdk.client";
import { errorStructureConstans } from "../constans/error-structure.constans";
import {
  BalanceService,
  BalanceServiceProps,
} from "../interfaces/balance-service.interface";

export async function balanceService({
  publicKey,
}: BalanceServiceProps): Promise<BalanceService> {
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

  const { data, error } = await address.getBalance({
    addresses: [publicKey],
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

  if (data[0].decimals) {
    const number = Number(data[0].balance).toFixed(data[0].decimals);
    return {
      success: {
        status: 200,
        balance: number,
      },
    };
  }

  return {
    success: {
      status: 200,
      balance: data[0].balance,
    },
  };
}
