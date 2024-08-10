import { DataUserWalletRequestInterface } from "../interfaces/global.interface";
import { errorStructureConstans } from "../constans/error-structure.constans";
import { balanceService } from "../services/balance.service";

export async function getBalanceController({
  request,
  response,
}: DataUserWalletRequestInterface) {
  const { publicKey } = request.query;

  const { success, error } = await balanceService({ publicKey });

  if (success) {
    return response.status(success.status).json({ balance: success.balance });
  }

  if (error) {
    return response.status(error.status).json({ error: error.error });
  }

  const { internal_error } = errorStructureConstans;

  return response.status(internal_error.status).json({ error: internal_error.code });
}
