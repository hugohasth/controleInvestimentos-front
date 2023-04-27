import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresComponent } from './setores/setores.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SetoresComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class SetoresModule { }
