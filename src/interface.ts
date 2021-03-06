import { CREDIT_CARD_STATUS, CREDIT_CARD_TYPE, DEPOSIT_STATUS, DEPOSIT_TYPE, ENUM_DEPOSITS_PROVIDERS, WITHDRAW_STATE, WITHDRAW_STATUS_GN } from "./enums"

export interface IAxiosError {
    error: any
}

export interface IHttpResponse {
    data?: any
    error?: any
    error_desc?: string
    error_code?: RESPONSE_ERROR
}
export enum RESPONSE_ERROR {
    BLOCKED = 'This user/client is blocked',
    AUTH = 'The credentials are invalid',
    QRCODE = 'AN ERROR OCCURRED WHEN GENERATING THE QRCODE',
    MERCHAN_ID = 'Merchan_Id incorrect',
    AMOUNT = 'Amount incorrect',
    DEVEDOR = 'Payer name incorrect',
    CPF = 'Payer CPF incorrect',
    CHARGE_ID = 'Charge_id do not exist'
}
export interface IAccessToken {
    access_token: string
    expire: number
    token_type: string
}
export interface ICreditCardCustomer {
    name: string;
    email: string;
    cpf: string;
    phone_number: string;
    birth: string
}
export interface IBillingAddress {
    street: string
    neighborhood: string;
    number: string;
    city: string;
    zipcode: number;
    state: string
}
export interface ICreditCard {
    _id: string
    user_id: string
    name: string
    number: number,
    expirationDate: string
    cvc: number
    status: CREDIT_CARD_STATUS
    type: CREDIT_CARD_TYPE
    selected?: boolean
    url?: string
    brand?: string
    billing_address: IBillingAddress
    customer: ICreditCardCustomer
}
export interface IPayload {
    merchant_id: string
    type: DEPOSIT_TYPE
    amount: number
    client_id?: string
}
export interface IAuthPayload {
    encoded?: string
    client_id: string;
    password: string
}
export interface IPixPayload extends IPayload {
    devedor: { cpf: string, nome: string }
    provider?: ENUM_DEPOSITS_PROVIDERS
    reference?: string
}
export interface IBoletoPayload extends IPayload {
    devedor: { cpf: string, name: string, email: string }
    provider: ENUM_DEPOSITS_PROVIDERS
    desc: string
}
export interface ICcPayload extends IPayload {
    provider: ENUM_DEPOSITS_PROVIDERS
    desc: string
    cc: ICreditCard
    payment_token: string
}
export interface IMpPayload extends IPayload {
    provider: ENUM_DEPOSITS_PROVIDERS
    desc: string
    devedor: { cpf: string, name: string, surname: string, email: string }
}
export interface IWithdrawPayload extends IPayload {
    name?: string
    pixKey: IPixKey
}
export interface IPixProviderPayload {
    calendario: {
        expiracao: number
    },
    devedor: {
        cpf: string,
        nome: string
    },
    valor: {
        original: string
    },
    chave: string
}
export type IPixType = 'email' | 'phone' | 'cpf' | 'random'
export interface IPixKey {
    type: IPixType
    key: string
}
export interface IPixResponse {
    reference: string
    cob: {
        qrcode: {
            qrcode: string
        }
    }
    status: DEPOSIT_STATUS
    timestamp: number
    expire: number
    provider: ENUM_DEPOSITS_PROVIDERS
}
export interface IBoletoResponse {
    cob: any
    status: DEPOSIT_STATUS
    timestamp: number
    expire: number
}
export interface ICheckResponse {
    trasaction_id: string
    type: DEPOSIT_TYPE
    status: DEPOSIT_STATUS | WITHDRAW_STATE
    merchant_id: string
}
export interface IWithdrawResponse {
    merchant_id: string
    status: WITHDRAW_STATUS_GN
    transaction_id: string
}
export interface IReportPayload {
    type: DEPOSIT_TYPE;
    status?: DEPOSIT_STATUS | WITHDRAW_STATE
    ts_start: number;
    ts_end: number;
    client_id?: string;
    rows_per_page: number
    page: number
}
export interface IDeposit {
    _id?: string
    type: DEPOSIT_TYPE
    payload: IPixPayload | IBoletoPayload | ICcPayload | IMpPayload
    transaction: IDepositTransaction
    timestamp: number
    movements?: { type: API_MOVEMENT, amount: number }[]
}
export interface IDepositTransaction {
    status: DEPOSIT_STATUS | WITHDRAW_STATE
    timestamp?: number
    expire: number
}
export enum API_MOVEMENT {
    DEPOSIT,
    COMMISSION,
    WITHDRAW,
    ROOLBACK,
}