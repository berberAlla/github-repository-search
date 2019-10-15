import {Component, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DataStorageService} from './services/data-storage.service';
import {IRepoInfo} from './shared/exports';
import {HttpService} from './services/http.service';
import {MessageService} from './message/message.service';
import {MessageComponent} from './message/message.component';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private _userRepos: Array<IRepoInfo> = [];
  reps: Array<IRepoInfo> = [];
  currentPage: number = 1;
  cardsPerPage: number = 8;

  @ViewChild('message', {read: ViewContainerRef, static: true}) messageContainer: ViewContainerRef;
  // public get userRepos(){
  //   return this._userRepos;
  // }
  //
  // public set userRepos(repos){
  //
  //  this._userRepos = [];
  //  for(let repoFromResponse of repos){
  //    const repo: IRepoInfo = {
  //      name: repoFromResponse.name,
  //      login: repoFromResponse['owner'].login,
  //      avatar_url: repoFromResponse['owner'].avatar_url,
  //      html_url: repoFromResponse.html_url,
  //      size: repoFromResponse.size,
  //      watchers: repoFromResponse.watchers
  //    };
  //    this._userRepos.push(repo);
  //  }

  // };
  public constructor(private dataStorage: DataStorageService,
                     private http: HttpService,
                     private messageService: MessageService){}

  public ngOnInit(): void {

    this.dataStorage.updateMessageRef(this.messageContainer);
    this.dataStorage.getUsersRepos()
      .subscribe((userRepos) => {

      });
  }

  public getCurrentPage(): Observable<number>{
    return this.dataStorage.getCurrentPage();
  }

  public getPerPage(): Observable<number>{
    return this.dataStorage.getPerPage();
  }
  public getRepos(): Observable<IRepoInfo[]>{
    return <Observable<IRepoInfo[]>>this.dataStorage.getUsersRepos();
  }
}
