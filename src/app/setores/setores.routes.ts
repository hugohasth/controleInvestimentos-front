import { Routes } from "@angular/router";
import { SetoresComponent } from "./containers/setores/setores.component";
import { SetorFormComponent } from "./containers/setor-form/setor-form.component";
import { setorResolver } from "./guard/setor.resolver";

export const SETORES_ROUTES: Routes = [
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