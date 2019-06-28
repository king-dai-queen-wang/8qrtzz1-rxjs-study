import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LeftNavBarComponent],
  exports: [
    LeftNavBarComponent
  ]
})
export class ComponentModule { }