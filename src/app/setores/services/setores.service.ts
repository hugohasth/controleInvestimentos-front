import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Setor } from '../model/setor';

@Injectable({
	providedIn: 'root'
})

export class SetoresService {

	constructor(private httpClient : HttpClient) { }

	list(): Setor[] {
		return [
			{ _id: '1', nome: 'AÇÕES (BRASIL)', porcentagem: 55.00, valor: 36075.49 },
			{ _id: '1', nome: 'AÇÕES (USA)', porcentagem: 35.00, valor: 4550.83 }
		];
	}
}
