import { Response } from "express";

export interface GetStablecoinProps {
  key?: string;
  response: Response;
}

export interface StablecoinSDKConfig {
  address: string;
  transactionTypes: ["fungible"];
  pageSize: number;
}
