import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {IRepoInfo} from '../shared/exports';
import {DataStorageService} from '../services/data-storage.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  public constructor(private http: HttpService,
                     private dataStorage: DataStorageService) { }

  private searchValue: string = '';
  public usersRepos: Array<IRepoInfo> = [];

  public onSearchValueEnter(searchValue): void{
    this.searchValue = searchValue;
  }

  public onSearchClick(): void{
    this.http.getRepositories(this.searchValue)
      .subscribe((userRepos) => {
        this.usersRepos = userRepos;
        this.dataStorage.updateUsersRepo(this.usersRepos);
        this.dataStorage.updateCurrentPage(1);
      })
  }
}
