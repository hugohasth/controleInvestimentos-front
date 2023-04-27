import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Setor } from '../model/setor';
import { first, tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SetoresService {
	
	private readonly uri = '/assets/setores.json'

	constructor(private httpClient : HttpClient) { }

	list() {
		return this.httpClient.get<Setor[]>(this.uri).pipe(first(), tap(setores => console.log(setores)));
	}
}
