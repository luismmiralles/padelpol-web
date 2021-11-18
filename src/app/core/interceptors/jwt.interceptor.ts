import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private sessionStorageService: SessionStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.sessionStorageService.getItem("token");
    if (token) request = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`
      }
    });
    //coge todas las peticiones http y sobreescribe el request metiendole el token para que
    // funcionen las llamadas a la API

    return next.handle(request);
  }
}
