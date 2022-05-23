# api-pipago-sdk-node

> A nodejs module for integration of your backend with the payment services provided by [Pipago](https://pipago.com.br/).

> Um módulo nodejs para integrar seu backend com os serviços de pagamento da [Pipago](https://pipago.com.br/).

> É possível realizar os testes de integração utilizando **Postman**/ It is possible to carry out the integration tests using **Postman**

## [](https://github.com/brasycad/api-pipago-sdk-node/blob/master/README.md#instala%C3%A7%C3%A3o)Instalação/Installation

```bash

$ npm install api-pipago-sdk-node

```

## [](https://github.com/brasycad/api-pipago-sdk-node/blob/master/README.md#uso-b%C3%A1sico)Uso Básico/Basic usage

Importe o módulo/Importe o módulo::

```js

import { PipagoSdkNode } from  'api-pipago-sdk-node';
import { Subscription, Observable } from 'rxjs'
const  api = new  PipagoSdkNode({
	client:id:'your client id',
	password:'your client password'
});

```

## Crie uma cobrança tipo Pix/Create a charge type Pix:

```js
const  payload: IPixPayload = {
	merchant_id:  'your transaction id',
	type:  'PIX',
	devedor: {
		cpf:  '702.053.262-63',
		nome:  'João Pirez'
	},
	amount:  10.0
}

const result$:Observable =  this.pipagoSdkNode.pix_create(payload)

const subscription:Subscription = result$
	.pipe( map((response: any) =>  console.log(response))
	.subscribe()
```

Aqui está o resultado da chamada/Here is the result of the call:

```js
response:{ data: IPixResponse } = {
	data: {
		reference:  '1651688846000SCIRQD53V74gn',
		cob: { qrcode: { qrcode:'qrcode-string' }},
		status:  'PENDING',
		timestamp:  1651688849347,
		expire:  1651692449347,
		transaction_id:  '6272c591e52dc0001471bf9e'
	}
}

```

## Relatório de depósitos ou saques/Report of deposits or withdrawals:

```js
const  payload: IReportPayload = {
	type:  'PIX',
	status:'APPROVED', //'PENDING' | 'CANCELED'
	ts_start: 1653129825417,
	ts_end:1653132025417,
	rows_per_page:3,
	page:2
}
const deposits$:Observable =  this.pipagoSdkNode.deposits(payload)
const withdraws$:Observable =  this.pipagoSdkNode.withdraws(payload)
const subscription:Subscription = deposits$
	.pipe( map((response: any) =>  console.log(response))
	.subscribe()
```

Aqui está o resultado da chamada/Here is the result of the call:

```js
response = {
  data: {
    total: 13,
    rows_per_page: 3,
    pages: 5,
    page: 1,
    ts_start: 1653129825417,
    ts_end: 1653132025417,
    status: "APPROVED",
    type: "PIX",
    rows: [
      {
        type: "PIX",
        payload: {
          merchant_id: "6288c2329f7c5f64ce0ff141",
          type: "PIX",
          devedor: {
            cpf: "10135236787",
            nome: "Marciano Silva Da Silva ",
          },
          amount: 10,
          provider: "gn",
          client_id: "62651040975a6b622f54ac3e",
          name: "hdf",
          reference: "1653129778000HBC6M2D8V64NGN",
        },
        transaction: {
          reference: "1653129778000HBC6M2D8V64NGN",
          cob: {
            qrcode: {
              qrcode:
                "00020101021226880014BR.GOV.BCB.PIX2566qrcodes-pix.gerencianet.com.br/v2/f3589f6cff5640df835e1f4e666c4d305204000053039865802BR5914GERENCIANET SA6010OURO PRETO62070503***63041C74",
            },
          },
          status: "APPROVED",
          timestamp: 1653129825418,
          expire: 1653133381097,
          provider: "gn",
        },
        timestamp: 1653129781098,
        transaction_id: "6288c235b975c10012c3420d",
        movements: [
          {
            type: 0,
            amount: 10,
          },
          {
            type: 1,
            amount: -0.5,
          },
        ],
      },
      {
        type: "PIX",
        payload: {
          merchant_id: "6288c323085035448746a34a",
          type: "PIX",
          devedor: {
            cpf: "21013031571",
            nome: "Leandro Peres Santos",
          },
          amount: 25,
          provider: "gn",
          client_id: "62651040975a6b622f54ac3e",
          name: "hdf",
          reference: "1653130019000X7D3ICR1H0R6GN",
        },
        transaction: {
          reference: "1653130019000X7D3ICR1H0R6GN",
          cob: {
            qrcode: {
              qrcode:
                "00020101021226880014BR.GOV.BCB.PIX2566qrcodes-pix.gerencianet.com.br/v2/bdf6588ba122438fb01969bbae2111b85204000053039865802BR5914GERENCIANET SA6010OURO PRETO62070503***630448F8",
            },
          },
          status: "APPROVED",
          timestamp: 1653130079522,
          expire: 1653133621996,
          provider: "gn",
        },
        timestamp: 1653130021999,
        transaction_id: "6288c3263267800013987c96",
        movements: [
          {
            type: 0,
            amount: 25,
          },
          {
            type: 1,
            amount: -1.25,
          },
        ],
      },
      {
        type: "PIX",
        payload: {
          merchant_id: "6288c3509f7c5f64ce0ff17e",
          type: "PIX",
          devedor: {
            cpf: "51382006268",
            nome: "Pineu Souza",
          },
          amount: 10,
          provider: "gn",
          client_id: "62651040975a6b622f54ac3e",
          name: "hdf",
          reference: "16531300640005E84QEX2ZCNNGN",
        },
        transaction: {
          reference: "16531300640005E84QEX2ZCNNGN",
          cob: {
            qrcode: {
              qrcode:
                "00020101021226880014BR.GOV.BCB.PIX2566qrcodes-pix.gerencianet.com.br/v2/4db82846656249c78f9a4badc2c819da5204000053039865802BR5914GERENCIANET SA6010OURO PRETO62070503***6304FA18",
            },
          },
          status: "APPROVED",
          timestamp: 1653130140776,
          expire: 1653133666411,
          provider: "gn",
        },
        timestamp: 1653130066412,
        transaction_id: "6288c3523267800013987c98",
        movements: [
          {
            type: 0,
            amount: 10,
          },
          {
            type: 1,
            amount: -0.5,
          },
        ],
      },
    ],
  },
};
```

## License

[MIT](LICENSE)
