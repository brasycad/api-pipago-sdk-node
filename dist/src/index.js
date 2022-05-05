"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipagoSdkNode = void 0;
const rxjs_1 = require("rxjs");
const axios_observable_1 = require("axios-observable");
const operators_1 = require("rxjs/operators");
const constants_1 = require("./constants");
const operators_rxjs_1 = require("./operators.rxjs");
const axios = axios_observable_1.default.create({ baseURL: constants_1.HOST, timeout: 20000 });
class PipagoSdkNode {
    constructor(config) {
        this.config = { ...config, encoded: Buffer.from(`${config.client_id}:${config.password}`).toString('base64'), };
        this.initializer = (0, rxjs_1.timer)(0, constants_1.MS_ONE_MIN * 45)
            .pipe((0, operators_1.switchMap)(() => this.refreshToken()));
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
        return axios
            .get('auth', { headers: { Authorization: `Basic ${this.config.encoded}` } })
            .pipe((0, operators_1.retry)(3), (0, operators_1.catchError)((e) => {
            console.error(e);
            return (0, rxjs_1.of)(e);
        }), (0, operators_1.map)((response) => response.data), (0, operators_1.map)((response) => response.data), (0, operators_1.map)((data) => data?.access_token), (0, operators_1.filter)(Boolean), (0, operators_1.tap)((access_token) => axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`)
        //tap((access_token: string) => this.access_token = access_token)
        );
    }
    pix_create(payload) {
        return axios.post('pix/create', payload)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    pix_check(transaction_id) {
        return axios.get(`pix/check/${transaction_id}`)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    boleto_create(payload) {
        return axios.post('boleto/create', payload)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    boleto_check(transaction_id) {
        return axios.get(`pix/check/${transaction_id}`)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    cc_create(payload) {
        return axios.post('cc/create', payload)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    cc_check(transaction_id) {
        return axios.get(`cc/check/${transaction_id}`)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    mp_create(payload) {
        return axios.post('mp/create', payload)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    mp_check(transaction_id) {
        return axios.get(`mp/check/${transaction_id}`)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
    pix_send(payload) {
        return axios.post('pix/send', payload)
            .pipe(operators_rxjs_1.ResponsePipago);
    }
}
exports.PipagoSdkNode = PipagoSdkNode;
//# sourceMappingURL=index.js.map