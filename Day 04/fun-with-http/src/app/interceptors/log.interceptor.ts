import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepting the get command', req.url);

        console.log('Header: ', req.headers.keys().map(key => `${key}: ${req.headers.get(key)}`));

        return next.handle(req).pipe(
            filter(ev => ev instanceof HttpResponse), 
            map(ev => ev as HttpResponse<any>),
            tap(val => {
                console.log('Response Body: ', val.body)
            })
        )  
    }
}