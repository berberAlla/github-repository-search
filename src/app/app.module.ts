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

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    MessageComponent
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
    MessageService
  ],
  entryComponents: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
