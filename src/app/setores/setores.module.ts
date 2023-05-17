import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresComponent } from './setores/setores.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { SetorFormComponent } from './setor-form/setor-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SetoresListComponent } from './setores-list/setores-list.component';


@NgModule({
  declarations: [
    SetoresComponent,
    SetorFormComponent,
    SetoresListComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SetoresModule { }
