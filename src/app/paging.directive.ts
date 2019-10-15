import {Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {IRepoInfo} from './shared/exports';
import {DataStorageService} from './services/data-storage.service';

@Directive({
  selector: '[paging]',
  exportAs: 'paging'
})
export class PagingDirective implements OnChanges, OnInit{

  ngOnChanges(changes: SimpleChanges): void {
    this.context = {
      $implicit: this.repositories.slice(0,this.perPage)
    };
    this.vCont.clear();
    this.vCont.createEmbeddedView(this.tRef, this.context);
  }

  ngOnInit(): void {
    this.dataStorage.
  }

  constructor(private vCont: ViewContainerRef,
              private tRef: TemplateRef<any>,
              private dataStorage: DataStorageService) { }

  @Input('pagingOf') set repositories(val) {
    this._repositories = val;
  }
  private context: any = {};
  private index: number = 1;
  get repositories(){
    return this._repositories;
  }

  _repositories: Array<IRepoInfo> = [];
  perPage: number = 8;


}
