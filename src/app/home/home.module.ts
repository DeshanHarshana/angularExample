import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatepanComponent } from './calculatepan/calculatepan.component';
import { DollormeterComponent } from './dollormeter/dollormeter.component';



@NgModule({
  declarations: [
    CalculatepanComponent,
    DollormeterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatepanComponent,
    DollormeterComponent
  ]
})
export class HomeModule { 
  
}


