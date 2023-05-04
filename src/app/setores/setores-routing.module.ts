import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetoresComponent } from './setores/setores.component';
import { SetorFormComponent } from './setor-form/setor-form.component';

const routes: Routes = [
	{
		path: '',
		component: SetoresComponent
	},
	{
		path: 'new',
		component: SetorFormComponent
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
