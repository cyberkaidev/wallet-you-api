import { ResponseDto } from "@tatumio/tatum";

import { errorConstans } from "../constans/error-constans";
import { AppError } from "../errors/app-error";

export async function errorTransactionsSDKValidation<T>(
  error?: ResponseDto<T>["error"],
) {
  const { KEY_NOT_FOUND, INTERNAL_ERROR } = errorConstans;

  if (error?.code === "validation.failed") {
    throw new AppError(KEY_NOT_FOUND.message, KEY_NOT_FOUND.statusCode);
  }

  if (error) {
    throw new AppError(INTERNAL_ERROR.message, INTERNAL_ERROR.statusCode);
  }
}
