"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEPOSIT_STATUS = exports.WITHDRAW_STATUS_GN = exports.MP_STATUS = exports.GN_STATUS = exports.GN_PIX_STATUS = exports.ENUM_DEPOSITS_PROVIDERS = exports.DEPOSIT_PROVIDER_CODE = exports.WITHDRAW_STATE = exports.DEPOSIT_TYPE = exports.RESPONSE_ERROR = exports.CREDIT_CARD_TYPE = exports.CREDIT_CARD_STATUS = void 0;
var CREDIT_CARD_STATUS;
(function (CREDIT_CARD_STATUS) {
    CREDIT_CARD_STATUS["REMOVED"] = "REMOVED";
    CREDIT_CARD_STATUS["ACTIVED"] = "ACTIVED";
    CREDIT_CARD_STATUS["EXPIRED"] = "EXPIRED";
})(CREDIT_CARD_STATUS = exports.CREDIT_CARD_STATUS || (exports.CREDIT_CARD_STATUS = {}));
var CREDIT_CARD_TYPE;
(function (CREDIT_CARD_TYPE) {
    CREDIT_CARD_TYPE["electron"] = "electron";
    CREDIT_CARD_TYPE["maestro"] = "maestro";
    CREDIT_CARD_TYPE["dankort"] = "dankort";
    CREDIT_CARD_TYPE["interpayment"] = "interpayment";
    CREDIT_CARD_TYPE["unionpay"] = "unionpay";
    CREDIT_CARD_TYPE["visa"] = "visa";
    CREDIT_CARD_TYPE["mastercard"] = "mastercard";
    CREDIT_CARD_TYPE["amex"] = "amex";
    CREDIT_CARD_TYPE["diners"] = "diners";
    CREDIT_CARD_TYPE["jcb"] = "jcb";
    CREDIT_CARD_TYPE["discover"] = "discover";
    CREDIT_CARD_TYPE["elo"] = "elo";
    CREDIT_CARD_TYPE["hipercard"] = "hipercard";
})(CREDIT_CARD_TYPE = exports.CREDIT_CARD_TYPE || (exports.CREDIT_CARD_TYPE = {}));
var RESPONSE_ERROR;
(function (RESPONSE_ERROR) {
    RESPONSE_ERROR["BLOCKED"] = "This user/client is blocked";
    RESPONSE_ERROR["AUTH"] = "The credentials are invalid";
    RESPONSE_ERROR["QRCODE"] = "AN ERROR OCCURRED WHEN GENERATING THE QRCODE";
    RESPONSE_ERROR["MERCHAN_ID"] = "Merchan_Id incorrect";
    RESPONSE_ERROR["AMOUNT"] = "Amount incorrect";
    RESPONSE_ERROR["DEVEDOR"] = "Payer name incorrect";
    RESPONSE_ERROR["CPF"] = "Payer CPF incorrect";
    RESPONSE_ERROR["CHARGE_ID"] = "Charge_id do not exist";
})(RESPONSE_ERROR = exports.RESPONSE_ERROR || (exports.RESPONSE_ERROR = {}));
var DEPOSIT_TYPE;
(function (DEPOSIT_TYPE) {
    DEPOSIT_TYPE["PIX"] = "PIX";
    DEPOSIT_TYPE["CC"] = "CC";
    DEPOSIT_TYPE["BL"] = "BL";
    DEPOSIT_TYPE["MP"] = "MP";
})(DEPOSIT_TYPE = exports.DEPOSIT_TYPE || (exports.DEPOSIT_TYPE = {}));
var WITHDRAW_STATE;
(function (WITHDRAW_STATE) {
    WITHDRAW_STATE["PENDING"] = "PENDING";
    WITHDRAW_STATE["APPROVED"] = "APPROVED";
    WITHDRAW_STATE["CANCELLED"] = "CANCELLED";
})(WITHDRAW_STATE = exports.WITHDRAW_STATE || (exports.WITHDRAW_STATE = {}));
var DEPOSIT_PROVIDER_CODE;
(function (DEPOSIT_PROVIDER_CODE) {
    DEPOSIT_PROVIDER_CODE["PIX"] = "IX";
    DEPOSIT_PROVIDER_CODE["BOLETO"] = "BL";
    DEPOSIT_PROVIDER_CODE["CREDIT_CARD"] = "CC";
    DEPOSIT_PROVIDER_CODE["ASTROPAY"] = "AP";
    DEPOSIT_PROVIDER_CODE["BITCOIN"] = "BT";
    DEPOSIT_PROVIDER_CODE["MERCADOPAGO"] = "MP";
})(DEPOSIT_PROVIDER_CODE = exports.DEPOSIT_PROVIDER_CODE || (exports.DEPOSIT_PROVIDER_CODE = {}));
var ENUM_DEPOSITS_PROVIDERS;
(function (ENUM_DEPOSITS_PROVIDERS) {
    ENUM_DEPOSITS_PROVIDERS["CAIXA"] = "caixa";
    ENUM_DEPOSITS_PROVIDERS["GN"] = "gn";
    ENUM_DEPOSITS_PROVIDERS["PS"] = "ps";
    ENUM_DEPOSITS_PROVIDERS["MERCADOPAGO"] = "mercadopago";
})(ENUM_DEPOSITS_PROVIDERS = exports.ENUM_DEPOSITS_PROVIDERS || (exports.ENUM_DEPOSITS_PROVIDERS = {}));
var GN_PIX_STATUS;
(function (GN_PIX_STATUS) {
    GN_PIX_STATUS["ATIVA"] = "ATIVA";
    GN_PIX_STATUS["CONCLUIDA"] = "CONCLUIDA";
})(GN_PIX_STATUS = exports.GN_PIX_STATUS || (exports.GN_PIX_STATUS = {}));
var GN_STATUS;
(function (GN_STATUS) {
    GN_STATUS["PAID"] = "paid";
    GN_STATUS["SETTLED"] = "settled";
    GN_STATUS["WAITING"] = "waiting";
    GN_STATUS["NEW"] = "new";
    GN_STATUS["UNPAID"] = "unpaid";
    GN_STATUS["CANCELLED"] = "cancelled";
    GN_STATUS["EXPIRED"] = "expired";
    GN_STATUS["REFUNDED"] = "refunded";
})(GN_STATUS = exports.GN_STATUS || (exports.GN_STATUS = {}));
var MP_STATUS;
(function (MP_STATUS) {
    MP_STATUS["APPROVED"] = "approved";
    MP_STATUS["REJECTED"] = "rejected";
})(MP_STATUS = exports.MP_STATUS || (exports.MP_STATUS = {}));
var WITHDRAW_STATUS_GN;
(function (WITHDRAW_STATUS_GN) {
    WITHDRAW_STATUS_GN["EM_PROCESSAMENTO"] = "EM_PROCESSAMENTO";
    WITHDRAW_STATUS_GN["REALIZADO"] = "REALIZADO";
    WITHDRAW_STATUS_GN["NAO_REALIZADO"] = "NAO_REALIZADO";
    WITHDRAW_STATUS_GN["DEVOLVIDO"] = "DEVOLVIDO";
})(WITHDRAW_STATUS_GN = exports.WITHDRAW_STATUS_GN || (exports.WITHDRAW_STATUS_GN = {}));
var DEPOSIT_STATUS;
(function (DEPOSIT_STATUS) {
    DEPOSIT_STATUS["PENDING"] = "PENDING";
    DEPOSIT_STATUS["CANCELLED"] = "CANCELLED";
    DEPOSIT_STATUS["APPROVED"] = "APPROVED";
})(DEPOSIT_STATUS = exports.DEPOSIT_STATUS || (exports.DEPOSIT_STATUS = {}));
//# sourceMappingURL=enums.js.map