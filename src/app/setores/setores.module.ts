import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresComponent } from './setores/setores.component';


@NgModule({
  declarations: [
    SetoresComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    MatTableModule
  ]
})
export class SetoresModule { }
