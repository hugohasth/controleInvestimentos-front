import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SetoresComponent } from './containers/setores/setores.component';
import { SetorFormComponent } from './containers/setor-form/setor-form.component';
import { SetoresListComponent } from './components/setores-list/setores-list.component';


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
