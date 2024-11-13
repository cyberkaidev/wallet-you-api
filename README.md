# Wallet You API

A RESTful API for [Wallet you](https://github.com/cyberkaidev/wallet-you) and [Bank you](https://github.com/cyberkaidev/bank-you)

![](https://i.imgur.com/m7714Nz.png)

### Links

- :art: [Design system](https://www.figma.com/board/zZdA8VEFYwlnyEqP9iWx55/Wallet-you-(API)?node-id=0-1&t=EnSjoeLCHHgAAKfi-1)

### Requirements

- [Node.js >= 20.6.0](https://nodejs.org/en)
- [Tatum environment variable](https://docs.tatum.com/)

### Setup

Create an .env file with the properties:
[Create an account to have your key](https://docs.tatum.com/)

```
TATUM_SDK_V4=YOUR-API-KEY
```

1. Install dependencies
```shell
yarn install
```

2. Run api
```shell
yarn dev
```

# Bitcoin API

#### Returns your Bitcoin balance

```http
  GET /v1/bitcoin/get-balance/YOUR-PUBLIC-KEY
  GET /v1/bitcoin/mock/get-balance
```

| Param            | Description          |
|------------------|----------------------|
| YOUR-PUBLIC-KEY* | Public key (bitcoin) |

- Response (200)
```shell
{
  balance: string;
}
```

#### Returns your Bitcoin transactions

```http
  GET /v1/bitcoin/get-transactions/YOUR-PUBLIC-KEY
  GET /v1/bitcoin/mock/get-transactions
```

| Param            | Description          |
|------------------|----------------------|
| YOUR-PUBLIC-KEY* | Public key (bitcoin) |

- Response (200)
```shell
{
  transactions: {
    chain: string;
    blockNumber: number | null;
    timestamp: number;
    transactionType: "incoming" | "outgoing";
    hash: string;
    address: string;
    amount: string;
  }[]
}
```

# Stablecoin API

#### Returns your stablecoin balance (USDC/USDT)

```http
  GET /v1/stablecoin/get-balance/YOUR-PUBLIC-KEY
  GET /v1/stablecoin/mock/get-balance
```

| Param            | Description           |
|------------------|-----------------------|
| YOUR-PUBLIC-KEY* | Public key (ethereum) |

- Response (200)
```shell
{
  balance: {
    usdc: string;
    usdt: string;
  }
}
```

#### Returns your stablecoin transactions (USDC/USDT)

```http
  GET /v1/stablecoin/get-transactions/YOUR-PUBLIC-KEY
  GET /v1/stablecoin/mock/get-transactions
```

| Param            | Description           |
|------------------|-----------------------|
| YOUR-PUBLIC-KEY* | Public key (ethereum) |

- Response (200)
```shell
{
  transactions: {
    date: string;
    items: {
      tokenId?: string;
      amount: string;
      transactionSubtype: "incoming" | "outgoing";
      tokenName: "USDC" | "USDT";
      timestamp: number;
      hours: string;
      date: string;
    }[]
  }[]
}
```
