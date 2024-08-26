import { tokenAddresses } from "../constans/tokens-addresses-constans";

export function getTokenNameByTokenAddress(address: string) {
  const { USDC_ETH } = tokenAddresses;

  return address.toLocaleLowerCase() === USDC_ETH.toLocaleLowerCase()
    ? "USDC"
    : "USDT";
}
