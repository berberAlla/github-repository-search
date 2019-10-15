import {Component, Input} from '@angular/core';
import {IRepoInfo} from '../shared/exports';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  @Input('repo') public repo: IRepoInfo;

}
