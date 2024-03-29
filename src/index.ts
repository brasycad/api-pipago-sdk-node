import { Observable, of, Subscription, timer } from 'rxjs';
import Axios from 'axios-observable';
import { catchError, map, tap, switchMap, retry, filter } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { IAccessToken, IAuthPayload, IBoletoPayload, ICheckResponse, IDeposit, IHttpResponse, IPixPayload, IPixResponse, IReportPayload, IWithdrawPayload, IWithdrawResponse } from './interface';
import { HOST, MS_ONE_MIN } from './constants';
import { ResponsePipago } from './operators.rxjs';
const axios = Axios.create({ baseURL: HOST, timeout: 20000 });

export class PipagoSdkNode {
  private initializer: Observable<any>;
  private sub$: Subscription;
  private config: IAuthPayload;
  constructor(config: IAuthPayload) {
    this.config = { ...config, encoded: Buffer.from(`${config.client_id}:${config.password}`).toString('base64'), };
    this.initializer = timer(0, MS_ONE_MIN * 45)
      .pipe(
        switchMap(() => this.refreshToken())
      );
    this.start();
  }
  public start() {
    this.sub$ = !this.sub$ ? this.initializer.subscribe() : this.sub$;
  }
  public stop() {
    this.sub$.unsubscribe();
    this.sub$ = null;
  }
  private refreshToken() {
    return axios
      .get('auth', { headers: { Authorization: `Basic ${this.config.encoded}` } })
      .pipe(
        retry(3),
        catchError((e) => {
          console.error('Refresh Token error:', e);
          return of(e);
        }),
        map((response: AxiosResponse) => response.data),
        map((response: IHttpResponse) => response.data),
        map((data: IAccessToken) => data?.access_token),
        filter(Boolean),
        tap((access_token: string) => axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`)
      )
  }
  public check(transaction_id: string): Observable<ICheckResponse> {
    return axios.get(`check/${transaction_id}`)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(err);
        }),
        ResponsePipago
      )
  }
  public pix_create(payload: IPixPayload): Observable<IHttpResponse> {
    return axios.post('pix/create', payload)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(err);
        }),
        ResponsePipago
      )
  }
  public boleto_create(payload: IBoletoPayload): Observable<IHttpResponse> {
    return axios.post('boleto/create', payload)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(err);
        }),
        ResponsePipago
      )
  }
  public cc_create(payload: IBoletoPayload): Observable<IHttpResponse> {
    return axios.post('cc/create', payload)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(err);
        }),
        ResponsePipago
      )
  }
  public mp_create(payload: IBoletoPayload): Observable<IHttpResponse> {
    return axios.post('mp/create', payload)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(err);
        }),
        ResponsePipago
      )
  }
  public pix_send(payload: IWithdrawPayload): Observable<IHttpResponse> {
    return axios.post('pix/send', payload)
      .pipe(
        catchError((err) => {
          console.log(err)
          return of(err);
        }),
        ResponsePipago
      )
  }
  public report(payload: IReportPayload): Observable<IHttpResponse> {
    return axios.post('report', payload)
      .pipe(
        ResponsePipago
      )
  }
}
