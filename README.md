# api-pipago-sdk-node

> A nodejs module for integration of your backend with the payment services provided by [Pipago](https://pipago.com.br/).

> Um módulo nodejs para integrar seu backend com os serviços de pagamento da [Pipago](https://pipago.com.br/).

## [](https://github.com/brasycad/api-pipago-sdk-node/blob/master/README.md#instala%C3%A7%C3%A3o)Instalação/Installation

```bash
$ npm install api-pipago-sdk-node
```

## [](https://github.com/brasycad/api-pipago-sdk-node/blob/master/README.md#uso-b%C3%A1sico)Uso Básico/Basic usage

Importe o módulo/Importe o módulo::

```js
import { PipagoSdkNode } from 'api-pipago-sdk-node';
const api = new PipagoSdkNode({
	client:id:'your client id',
	password:'your client password'
});
```

Crie uma cobrança tipo Pix/Create a charge type Pix:

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
return  this.pipagoSdkNode.pix_create(payload)
	.pipe( map((response: any) =>  console.log(response))

response:IPixResponse = {
	data: {
		reference: '1651688846000SCIRQD53V74gn',
		cob: { qrcode: { qrcode:'qrcode-string' },
		status: 'PENDING',
		timestamp: 1651688849347,
		expire: 1651692449347,
		transaction_id: '6272c591e52dc0001471bf9e'
	}
}
```

## License

[MIT](LICENSE)
