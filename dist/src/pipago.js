"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipagoSdkNode = void 0;
const rxjs_1 = require("rxjs");
const axios_observable_1 = require("axios-observable");
const operators_1 = require("rxjs/operators");
const constants_1 = require("./constants");
const axios = axios_observable_1.default.create({ baseURL: constants_1.HOST, timeout: 20000 });
const get = axios.get;
const post = axios.post;
class PipagoSdkNode {
    constructor(config) {
        this.config = { ...config, encoded: Buffer.from(`${config.client_id}:${config.password}`).toString('base64') };
        this.initializer = (0, rxjs_1.timer)(0, constants_1.MS_ONE_MIN * 45).pipe((0, operators_1.switchMap)(() => this.refreshToken()));
        this.start();
    }
    start() {
        this.sub$ = !this.sub$ ? this.initializer.subscribe() : this.sub$;
    }
    stop() {
        this.sub$.unsubscribe();
        this.sub$ = null;
    }
    refreshToken() {
        return get('auth', { headers: { Authorization: `Basic ${this.config.encoded}` } })
            .pipe((0, operators_1.retry)(3), 
        // catchError(() =>),
        (0, operators_1.map)((response) => response.data), (0, operators_1.map)((response) => response.data), (0, operators_1.tap)((data) => data?.access_token && (this.access_token = data.access_token)));
    }
    pix_create(payload) {
        return post('pix/create', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
            .pipe((0, operators_1.catchError)((err) => {
            console.log('pix/create', err);
            return (0, rxjs_1.of)(err);
        }), (0, operators_1.map)((response) => response?.data || response), (0, operators_1.map)((response) => response.error ? response : response.data));
    }
    pix_check(transaction_id) {
        return post(`pix/check/${transaction_id}`, { headers: { Authorization: `Bearer ${this.access_token}` } })
            .pipe((0, operators_1.catchError)((err) => {
            console.log('pix/check', err);
            return (0, rxjs_1.of)(err);
        }), (0, operators_1.map)((response) => response?.data || response));
    }
}
exports.PipagoSdkNode = PipagoSdkNode;
//# sourceMappingURL=pipago.js.map