export enum CREDIT_CARD_STATUS {
    REMOVED = 'REMOVED',
    ACTIVED = 'ACTIVED',
    EXPIRED = 'EXPIRED'
}
export enum CREDIT_CARD_TYPE {
    electron = 'electron',
    maestro = 'maestro',
    dankort = 'dankort',
    interpayment = 'interpayment',
    unionpay = 'unionpay',
    visa = 'visa',
    mastercard = 'mastercard',
    amex = 'amex',
    diners = 'diners',
    jcb = 'jcb',
    discover = 'discover',
    elo = 'elo',
    hipercard = 'hipercard'
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
export enum DEPOSIT_TYPE {
    PIX = 'PIX',
    CC = 'CC',
    BL = 'BL',
    MP = 'MP'
}
export enum WITHDRAW_STATE {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    CANCELLED = 'CANCELLED',
}
export enum DEPOSIT_PROVIDER_CODE {
    PIX = 'IX',
    BOLETO = 'BL',
    CREDIT_CARD = 'CC',
    ASTROPAY = 'AP',
    BITCOIN = 'BT',
    MERCADOPAGO = 'MP'
}
export enum ENUM_DEPOSITS_PROVIDERS {
    CAIXA = 'caixa',
    GN = 'gn',
    PS = 'ps',
    MERCADOPAGO = 'mercadopago',
}

export enum GN_PIX_STATUS {
    ATIVA = 'ATIVA',
    CONCLUIDA = 'CONCLUIDA'
}
export enum GN_STATUS {
    PAID = 'paid',
    SETTLED = 'settled',
    WAITING = 'waiting',
    NEW = 'new',
    UNPAID = 'unpaid',
    CANCELLED = 'cancelled',
    EXPIRED = 'expired',
    REFUNDED = 'refunded'
}
export enum MP_STATUS {
    APPROVED = 'approved',
    REJECTED = 'rejected'
}
export enum WITHDRAW_STATUS_GN {
    EM_PROCESSAMENTO = 'EM_PROCESSAMENTO',
    REALIZADO = 'REALIZADO',
    NAO_REALIZADO = 'NAO_REALIZADO',
    DEVOLVIDO = 'DEVOLVIDO'
}

export enum DEPOSIT_STATUS {
    PENDING = 'PENDING',
    CANCELLED = 'CANCELLED',
    APPROVED = 'APPROVED',
}