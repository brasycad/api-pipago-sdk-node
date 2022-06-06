"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_MOVEMENT = exports.RESPONSE_ERROR = void 0;
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
var API_MOVEMENT;
(function (API_MOVEMENT) {
    API_MOVEMENT[API_MOVEMENT["DEPOSIT"] = 0] = "DEPOSIT";
    API_MOVEMENT[API_MOVEMENT["COMMISSION"] = 1] = "COMMISSION";
    API_MOVEMENT[API_MOVEMENT["WITHDRAW"] = 2] = "WITHDRAW";
    API_MOVEMENT[API_MOVEMENT["ROOLBACK"] = 3] = "ROOLBACK";
})(API_MOVEMENT = exports.API_MOVEMENT || (exports.API_MOVEMENT = {}));
//# sourceMappingURL=interface.js.map