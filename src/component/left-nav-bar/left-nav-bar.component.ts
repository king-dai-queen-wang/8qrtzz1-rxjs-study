import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../model/menu.model';
@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.scss']
})
export class LeftNavBarComponent implements OnInit {
  @Input() option: Menu[] = [];
  constructor() { }

  ngOnInit() {
  }

  toggleChildren(item: Menu, option: Menu[], $event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.closeAllMenu(option);
    item.expendChildren = !item.expendChildren;
  }

  closeAllMenu(option: Menu[]) {
    option.map(item => {
      if (item.children.length > 0) { 
        this.closeAllMenu(item.children);
      } else {
        item.expendChildren = false;
      }
    });
  }
}