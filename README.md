# Wallet You API

A RESTful API for [Wallet You](https://github.com/cyberkaidev/wallet-you)

![](https://i.imgur.com/pKOAZHr.png)

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

### API documentation

#### Returns your Bitcoin balance

```http
  GET /v1/bitcoin/get-balance/YOUR-PUBLIC-KEY
```

| Param            | Type   | Description                |
|------------------|--------|----------------------------|
| YOUR-PUBLIC-KEY* | string | Public key of your bitcoin |


#### Returns your Bitcoin transactions

```http
  GET /v1/bitcoin/get-transactions/YOUR-PUBLIC-KEY
```

| Param            | Type   | Description                |
|------------------|--------|----------------------------|
| YOUR-PUBLIC-KEY* | string | Public key of your bitcoin |
