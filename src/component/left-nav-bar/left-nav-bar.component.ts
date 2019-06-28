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

}