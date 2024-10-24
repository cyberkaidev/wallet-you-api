import { DecimalProps } from "../interfaces/decimals-interface";

export function decimalsHelper({ value, decimals }: DecimalProps): string {
	if (typeof value === "number") return value.toFixed(decimals);

	return Number(value).toFixed(decimals);
}
