import { Observable, of, Subscription, timer } from 'rxjs';
import Axios from 'axios-observable';
import { catchError, map, tap, switchMap, retry } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { IAccessToken, IAuthPayload, IBoletoPayload, ICheckResponse, IHttpResponse, IPixPayload, IPixResponse, IWithdrawPayload, IWithdrawResponse } from './interface';
import { HOST, MS_ONE_MIN } from './constants';
const axios = Axios.create({ baseURL: HOST, timeout: 20000 });

export class PipagoSdkNode {
  private initializer: Observable<any>;
  private sub$: Subscription;
  private access_token: string;
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
          console.error(e);
          return of(e);
        }),
        map((response: AxiosResponse) => response.data),
        map((response: IHttpResponse) => response.data),
        tap((data: IAccessToken) => data?.access_token && (this.access_token = data.access_token))
      );
  }
  public pix_create(payload: IPixPayload): Observable<IPixResponse> {
    return axios.post('pix/create', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('pix/create', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public pix_check(transaction_id: string): Observable<ICheckResponse> {
    return axios.get(`pix/check/${transaction_id}`, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('pix/check', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }


  public boleto_create(payload: IBoletoPayload): Observable<IPixResponse> {
    return axios.post('boleto/create', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('boleto/create', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public boleto_check(transaction_id: string): Observable<ICheckResponse> {
    return axios.get(`pix/check/${transaction_id}`, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('pix/check', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public cc_create(payload: IBoletoPayload): Observable<IPixResponse> {
    return axios.post('cc/create', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('cc/create', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public cc_check(transaction_id: string): Observable<ICheckResponse> {
    return axios.get(`cc/check/${transaction_id}`, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('cc/check', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public mp_create(payload: IBoletoPayload): Observable<IPixResponse> {
    return axios.post('mp/create', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('mp/create', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public mp_check(transaction_id: string): Observable<ICheckResponse> {
    return axios.get(`mp/check/${transaction_id}`, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('mp/check', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }
  public pix_send(payload: IWithdrawPayload): Observable<IWithdrawResponse> {
    return axios.post('pix/send', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('pix/send', err);
          return of(err);
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      );
  }


}
