import { Observable, of, Subscription, timer } from "rxjs"
import Axios from 'axios-observable';
import { catchError, map, tap, switchMap, retry } from "rxjs/operators"
import { AxiosResponse } from 'axios'
import { IAccessToken, IAuthPayload, IHttpResponse, IPixPayload, IPixResponse } from "./interface";
import { HOST, MS_ONE_MIN } from "./constants";
const axios = Axios.create({ baseURL: HOST, timeout: 20000 });
const get = axios.get;
const post = axios.post;


export class PipagoSdkNode {
  private initializer: Observable<any>
  private sub$: Subscription
  private access_token: string
  private config: IAuthPayload
  constructor(config: IAuthPayload) {
    this.config = { ...config, encoded: Buffer.from(`${config.client_id}:${config.password}`).toString('base64') }
    this.initializer = timer(0, MS_ONE_MIN * 45).pipe(switchMap(() => this.refreshToken()))
    this.start()
  }
  public start() {
    this.sub$ = !this.sub$ ? this.initializer.subscribe() : this.sub$
  }
  public stop() {
    this.sub$.unsubscribe()
    this.sub$ = null
  }
  private refreshToken() {
    return get('auth', { headers: { Authorization: `Basic ${this.config.encoded}` } })
      .pipe(
        retry(3),
        // catchError(() =>),
        map((response: AxiosResponse) => response.data),
        map((response: IHttpResponse) => response.data),
        tap((data: IAccessToken) => data?.access_token && (this.access_token = data.access_token))
      )
  }
  public pix_create(payload: IPixPayload): Observable<IPixResponse> {
    return post('pix/create', payload, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('pix/create', err)
          return of(err)
        }),
        map((response: AxiosResponse) => response?.data || response),
        map((response: IHttpResponse) => response.error ? response : response.data)
      )
  }
  public pix_check(transaction_id: string): Observable<IPixResponse> {
    return post(`pix/check/${transaction_id}`, { headers: { Authorization: `Bearer ${this.access_token}` } })
      .pipe(
        catchError((err) => {
          console.log('pix/check', err)
          return of(err)
        }),
        map((response: AxiosResponse) => response?.data || response)
      )
  }
}