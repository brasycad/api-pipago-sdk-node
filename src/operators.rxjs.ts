import { AxiosResponse } from "axios";
import { Observable, of } from "rxjs";
import { map, retry } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { IHttpResponse } from "./interface";


export const ResponsePipago = (source$: Observable<any>): Observable<any> =>
    source$
        .pipe(
            retry(2),
            catchError((err) => {
                console.log('', err.code)
                return of({ error_desc: err.code, error: true });
            }),
            map((response: AxiosResponse) => response?.data || response),
            map((response: IHttpResponse) => response.error ? response : response.data),
        )

