import {IRepoInfo} from '../shared/exports';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ViewContainerRef} from '@angular/core';


export class DataStorageService {

  private usersRepos: BehaviorSubject<Array<IRepoInfo>> =
    new BehaviorSubject<Array<IRepoInfo>>([]);
  private messageRef: BehaviorSubject<ViewContainerRef> = new BehaviorSubject<ViewContainerRef>(null);
  private userName: Subject<string> = new Subject<string>();
  private perPage: BehaviorSubject<number> = new BehaviorSubject<number>(6);
  private currentPage: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private totalPages: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public updateUsersRepo(usersRepos: Array<IRepoInfo>): void{
    this.usersRepos.next(usersRepos);
    const totalPages = Math.floor(this.usersRepos.value.length / this.perPage.value)
      + (this.usersRepos.getValue().length % this.perPage.getValue() > 0 ? 1 : 0);
    this.updateTotalPages(totalPages);
  }
  public getUsersRepos(): Observable<Array<IRepoInfo>>{
    return this.usersRepos.asObservable();
  }

  public updateMessageRef(mRef){
    this.messageRef.next(mRef);
  }
  public getMessageRef(): BehaviorSubject<ViewContainerRef>{
    return this.messageRef;
  }

  public updateUserName(userName){
    this.userName.next(userName);
  }
  public getUserName(): Observable<string>{
    return this.userName.asObservable();
  }

  public updatePerPage(perPage: number): void{
    this.perPage.next(perPage);
  }

  public getPerPage(): Observable<number>{
    return this.perPage.asObservable();
  }

  public updateCurrentPage(currentPage: number): void{
    this.currentPage.next(currentPage);
  }

  public getCurrentPage(): Observable<number>{
    return this.currentPage.asObservable();
  }

  public updateTotalPages(totalPages: number): void{
    this.totalPages.next(totalPages);
  }

  public getTotalPages(): Observable<number>{
    return this.totalPages.asObservable();
  }
}
