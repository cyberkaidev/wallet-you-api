import { DataUserWalletRequestInterface } from '../interfaces/global.interface';
import { tatum } from '../client/tatumSDK.client';
import { errors } from '../helpers/errors';

export async function getTransactionsController({
  request,
  response,
}: DataUserWalletRequestInterface) {
  const { publicKey } = request.query;

  if (!publicKey) {
    const { status, code } = errors.empty_key;
    return response.status(status).json({ error: code });
  }

  const { address } = await tatum();

  const { data, error } = await address.getTransactions({
    address: publicKey,
  });

  if (error?.code == 'validation.failed') {
    const { status, code } = errors.key_not_found;
    return response.status(status).json({ error: code });
  }

  if (error) {
    const { status, code } = errors.internal_error;
    return response.status(status).json({ error: code });
  }

  return response.status(200).json({ transactions: data });
}
