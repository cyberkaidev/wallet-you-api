# Wallet You API

A RESTful API for [Wallet You](https://github.com/cyberkaidev/wallet-you)

![](https://i.imgur.com/8m89XTS.png)

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

### API documentation

#### Returns your Bitcoin balance

```http
  GET /v1/get-balance
```

| Param      | Type   | Description                |
|------------|--------|----------------------------|
| publicKey* | string | Public key of your bitcoin |


#### Returns your Bitcoin transactions

```http
  GET /v1/get-transactions
```

| Param      | Type   | Description                |
|------------|--------|----------------------------|
| publicKey* | string | Public key of your bitcoin |
