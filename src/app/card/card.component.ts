import {Component, Input, OnInit} from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {IRepoInfo} from '../shared/exports';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  @Input('repo') public repo: IRepoInfo;


}
