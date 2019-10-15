import {Injectable, OnInit} from "@angular/core";
import {DataStorageService} from "../../services/data-storage.service";

@Injectable()
export class PaginationService{

  constructor(private dataStorage: DataStorageService){
    this.dataStorage.getCurrentPage()
      .subscribe((currentPage: number) => {
        this.currentPage = currentPage;
      });
    this.dataStorage.getTotalPages()
      .subscribe((totalPages) => {
        this.totalPages = totalPages;
      })
  }

  currentPage: number;
  totalPages: number;


  onPageSelect(pageNum: number){
    this.dataStorage.updateCurrentPage(pageNum);
  }

  onPrev(){
    if(this.currentPage > 1){
      this.dataStorage.updateCurrentPage(--this.currentPage);
    }
  }

  onNext(){
    if(this.currentPage < this.totalPages){
      this.dataStorage.updateCurrentPage(++this.currentPage);
    }
  }

}
