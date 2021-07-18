import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { first, switchMap } from "rxjs/operators";
import { AuthenticationService } from "../services/authentication.service";


@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private auth: AuthenticationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token$ = this.auth.getToken();

        return token$.pipe(
            first(), 
            switchMap(token => {
                const modifiedReq = req.clone({
                    setHeaders: { Authorization: token }
                });
                return next.handle(modifiedReq);
            })
        )
    }
}