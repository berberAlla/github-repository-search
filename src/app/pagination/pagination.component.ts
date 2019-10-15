import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {PaginationService} from "./services/pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(private dataStorage: DataStorageService,
              public paginationService: PaginationService) { }


  public getTotalPages(): Observable<Array<any>>{
    return this.dataStorage.getTotalPages().pipe(map((size: number) => {
       return new Array<any>(size).fill(0).map((e,index) => {
         return index + 1;
       });
    }));
  }

  public getTotalPagesNum(): Observable<number>{
    return this.dataStorage.getTotalPages();
  }
}
