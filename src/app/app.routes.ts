import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'setores' },
	{ path: 'setores', loadChildren: () => import('./setores/setores.routes').then(m => m.SETORES_ROUTES)
  }
];