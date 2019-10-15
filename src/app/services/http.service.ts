import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable, ViewContainerRef} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {DataStorageService} from './data-storage.service';
import {MessageService} from '../message/message.service';
import {MessageComponent} from '../message/message.component';

@Injectable()
export class HttpService {

 public constructor(private http: HttpClient,
                    private dataStorage: DataStorageService,
                    private messageService: MessageService) {
    this.dataStorage.getMessageRef()
      .subscribe((messageRef) => {
        this.messageRef = messageRef;
      })
 }

 private messageRef: ViewContainerRef;

 public getRepositories(userName:string): Observable<any>{
      return this.http.get<any>(`https://api.github.com/users/${userName}/repos`);
 }

}
