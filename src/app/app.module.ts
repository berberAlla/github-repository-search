import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import {HttpService} from './services/http.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpInterceptorService} from './services/http-interceptor.service';
import {DataStorageService} from './services/data-storage.service';
import {MessageService} from './message/message.service';
import { MessageComponent } from './message/message.component';
import { PaginationComponent } from './pagination/pagination.component';
import {ReposFilterPipe} from "./pipes/repos-filter.pipe";
import {PaginationService} from "./pagination/services/pagination.service";
import {DataTransformService} from "./services/data-transform.service";
import {PaginatorFilterPipe} from "./pagination/pipes/paginator-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    MessageComponent,
    PaginationComponent,
    ReposFilterPipe,
    PaginatorFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    DataStorageService,
    MessageService,
    PaginationService,
    DataTransformService
  ],
  entryComponents: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
