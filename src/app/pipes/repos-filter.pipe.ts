import {Pipe, PipeTransform} from "@angular/core";
import {IRepoInfo} from "../shared/exports";

@Pipe({
  name: 'reposFilter'
})
export class ReposFilterPipe implements PipeTransform{

  transform(repos: Array<IRepoInfo>, perPage: number, currentPage: number): any {
    return repos.slice((currentPage - 1) * perPage, perPage * currentPage);
  }
}


// let reposArr = [];
// if(repos.slice((currentPage - 1) * perPage, perPage * currentPage).length < perPage){
//   const length = perPage - repos.slice((currentPage - 1) * perPage, perPage * currentPage).length;
//   const blank: IRepoInfo = {
//     watchers: -1,
//     name: '',
//     login: '',
//     html_url: '',
//     size: -1,
//     avatar_url: ''
//   };
//   reposArr = [...repos.slice((currentPage - 1) * perPage, perPage * currentPage),...new Array(length).fill(blank)];
// }

// return reposArr.length > 0 ? reposArr : repos.slice((currentPage - 1) * perPage, perPage * currentPage);
