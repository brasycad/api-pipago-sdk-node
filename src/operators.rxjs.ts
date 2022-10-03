import { AxiosResponse } from "axios";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { catchError, tap } from "rxjs/operators";
import { IHttpResponse } from "./interface";


export const ResponsePipago = (source$: Observable<any>): Observable<any> =>
    source$
        .pipe(
            map((response: AxiosResponse) => response?.data || response),
            map((response: IHttpResponse) => response.error ? response : response.data),
        )

