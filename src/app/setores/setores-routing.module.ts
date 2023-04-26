import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetoresComponent } from './setores/setores.component';

const routes: Routes = [
	{
		path: '',
		component: SetoresComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
