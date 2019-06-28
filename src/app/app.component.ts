import { Component } from '@angular/core';
import { Menu } from '../model/menu.model';
import { MENU } from '../base/menu/menu';
import {toNodeTree} from '../util/node-tree-util'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  public menu: Menu[] = toNodeTree(MENU);
  
}
