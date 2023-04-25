import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresComponent } from './setores/setores.component';


@NgModule({
  declarations: [
    SetoresComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule
  ]
})
export class SetoresModule { }
