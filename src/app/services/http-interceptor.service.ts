import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import  {Observable, throwError} from 'rxjs';
import {catchError, filter, map, tap} from 'rxjs/operators';
import {DataStorageService} from './data-storage.service';
import {MessageComponent} from "../message/message.component";
import {MessageService} from "../message/message.service";
import {DataTransformService} from "./data-transform.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private dataStorage: DataStorageService,
              private messageService: MessageService,
              private dataTransformService: DataTransformService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = req.headers.append('Accept', 'application/vnd.github.v3+json');
    const clone = req.clone({
      headers: headers
    });

    return next.handle(clone)
      .pipe(filter((httpEvent: HttpEvent<any>) => {
        return httpEvent instanceof HttpResponse;
      }),
        catchError((err: HttpErrorResponse) => {
          this.dataStorage.updateUsersRepo([]);
          this.messageService.createMessage({
            container: this.dataStorage.getMessageRef().value,
            component: MessageComponent,
            text: err.error.message
          });
          return  throwError(err.error.message);
        }),
        map((response: HttpResponse<any>) => {
          const transformed = this.dataTransformService.setRepos(response.body);
          if(transformed.length === 0){
            this.messageService.createMessage({
              container: this.dataStorage.getMessageRef().value,
              component: MessageComponent,
              text: 'This User Hove 0 repositories'
            });
          }
          return response.clone({body: transformed});
        })
      )
  }
}
