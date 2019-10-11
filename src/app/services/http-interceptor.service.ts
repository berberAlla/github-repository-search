import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable,} from 'rxjs';
import { filter, map} from 'rxjs/operators';
import {Injectable, ViewContainerRef} from '@angular/core';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = req.headers.append('Accept', 'application/vnd.github.v3+json');
    const clone = req.clone({
      headers: headers
    });
    return next.handle(clone)
      .pipe(filter((httpEvent: HttpEvent<any>) => {
        return httpEvent instanceof HttpResponse;
      }),
        map((response: HttpResponse<any>) => {
          return response.clone({body: response.body});
        })
      )
  }
}
