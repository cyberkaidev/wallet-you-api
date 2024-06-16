import { DataUserWalletRequestInterface } from '../interfaces/global.interface';
import { tatum } from '../client/tatumSDK.client';
import { errors } from '../helpers/errors';

export async function getBalanceController({
  request,
  response,
}: DataUserWalletRequestInterface) {
  const { publicKey } = request.query;

  if (!publicKey) {
    const { status, code } = errors.empty_key;
    return response.status(status).json({ error: code });
  }

  const { address } = await tatum();

  const { data, error } = await address.getBalance({
    addresses: [publicKey],
  });

  if (error?.code == 'validation.failed') {
    const { status, code } = errors.key_not_found;
    return response.status(status).json({ error: code });
  }

  if (error) {
    const { status, code } = errors.internal_error;
    return response.status(status).json({ error: code });
  }

  if (data[0].decimals) {
    const number = Number(data[0].balance).toFixed(data[0].decimals);
    return response.status(200).json({ balance: number });
  }

  return response.status(200).json({ balance: data[0].balance });
}
