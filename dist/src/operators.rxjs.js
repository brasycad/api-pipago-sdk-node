"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePipago = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const operators_2 = require("rxjs/operators");
const ResponsePipago = (source$) => source$
    .pipe((0, operators_2.catchError)((err) => {
    console.log(err);
    return (0, rxjs_1.of)(err);
}), (0, operators_1.map)((response) => response?.data || response), (0, operators_1.map)((response) => response.error ? response : response.data));
exports.ResponsePipago = ResponsePipago;
//# sourceMappingURL=operators.rxjs.js.map