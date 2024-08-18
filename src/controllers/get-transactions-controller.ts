import { DataUserWalletRequestInterface } from "../interfaces/global-interface";
import { errorStructureConstans } from "../constans/error-structure-constans";
import { transactionsService } from "../services/transactions-service";

export async function getTransactionsController({
  request,
  response,
}: DataUserWalletRequestInterface) {
  const { publicKey } = request.query;

  const { success, error } = await transactionsService({ publicKey });

  if (success) {
    return response
      .status(success.status)
      .json({ transactions: success.transactions });
  }

  if (error) {
    return response.status(error.status).json({ error: error.error });
  }

  const { internal_error } = errorStructureConstans;

  return response
    .status(internal_error.status)
    .json({ error: internal_error.code });
}
