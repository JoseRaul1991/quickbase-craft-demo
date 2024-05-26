import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { DEFAULT_DELAY } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class DelayInterceptor implements HttpInterceptor {
  constructor(@Inject(DEFAULT_DELAY) private _defaultDelay: number) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(delay(this._defaultDelay ?? 0));
  }
}
