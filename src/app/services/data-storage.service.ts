import {IRepoInfo} from '../shared/exports';
import {Observable, Subject} from 'rxjs';
import {ViewContainerRef} from '@angular/core';


export class DataStorageService {

  private usersRepos: Subject<Array<IRepoInfo> | string> = new Subject<Array<IRepoInfo> | string>();
  private messageRef: Subject<ViewContainerRef> = new Subject<ViewContainerRef>();
  public updateUsersRepo(usersRepos: Array<IRepoInfo> | string): void{
    this.usersRepos.next(usersRepos);
  }
  public getUsersRepos(): Observable<Array<IRepoInfo> | string>{
    return this.usersRepos.asObservable();
  }

  public updateMessageRef(mRef){
    this.messageRef.next(mRef);
  }
  public getMessageRef(): Observable<ViewContainerRef>{
    return this.messageRef.asObservable();
  }
}
