import { AddressBalance } from "@tatumio/tatum";
import { decimalsHelper } from "./decimals-helper";

export function joinStablecoinBalance(addresses: AddressBalance[]) {
  const balances = { usdc: "0", usdt: "0" };

  for (let index = 0; index < addresses.length; index++) {
    const element = addresses[index];

    switch (element.asset) {
      case "USDC":
        balances.usdc = decimalsHelper({
          value: element.balance,
          decimals: element.decimals,
        });
        break;
      case "USDT":
        balances.usdt = decimalsHelper({
          value: element.balance,
          decimals: element.decimals,
        });
        break;
    }
  }

  return balances;
}
