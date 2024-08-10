export interface BalanceServiceProps {
  publicKey?: string;
}

export interface BalanceService {
  success?: {
    status: number;
    balance: string;
  };
  error?: {
    status: number;
    error: string;
  };
}
