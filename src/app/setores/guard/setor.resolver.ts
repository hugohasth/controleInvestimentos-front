import { ResolveFn } from '@angular/router';
import { SetoresService } from '../services/setores.service';
import { Setor } from '../model/setor';
import { of } from 'rxjs';
import { inject } from '@angular/core';

export const setorResolver: ResolveFn<Setor> = (route, state, setorService = inject(SetoresService)) => {
		
	if(route.params && route.params['id']) {
		return setorService.loadById(route.params['id']);
	}
    return of({_id: '', nome: '', porcentagem: null, valor: null, ativos: [] });
};
