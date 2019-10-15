import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'paginatorFilter'
})
export class PaginatorFilterPipe implements PipeTransform{

  constructor(){}

  transform(paginationArray: Array<any>, currentPage: number, maxPaginatorSize: number = 10): any {
    const start = currentPage > maxPaginatorSize ? currentPage - maxPaginatorSize: 0;
    const end = currentPage > maxPaginatorSize ? (currentPage - maxPaginatorSize) + maxPaginatorSize: maxPaginatorSize;
    return paginationArray.slice(start,end);
  }
}
