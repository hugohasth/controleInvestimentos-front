import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetoresComponent } from './containers/setores/setores.component';
import { SetorFormComponent } from './containers/setor-form/setor-form.component';
import { setorResolver } from './guard/setor.resolver';

const routes: Routes = [
	{
		path: '',
		component: SetoresComponent
	},
	{
		path: 'new',
		component: SetorFormComponent,
		resolve: {setor: setorResolver}
	},
	{
		path: 'edit/:id',
		component: SetorFormComponent,
		resolve: {setor: setorResolver}
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
