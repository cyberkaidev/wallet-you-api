import { ResponseDto } from "@tatumio/tatum";
import { errorConstans } from "../constans/error-constans";
import { AppError } from "../errors/app-error";

export async function errorBalanceSDKValidation<T>(
  error?: ResponseDto<T>["error"],
) {
  const { key_not_found, internal_error } = errorConstans;

  if (error?.code == "validation.failed") {
    throw new AppError(key_not_found.message, key_not_found.statusCode);
  }

  if (error) {
    throw new AppError(internal_error.message, internal_error.statusCode);
  }
}
