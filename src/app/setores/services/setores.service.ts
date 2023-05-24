import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Setor } from '../model/setor';
import { delay, first, tap } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SetoresService {
	
	private readonly uri = '/api/setores'

	constructor(private httpClient : HttpClient) { }

	list() {
		return this.httpClient.get<Setor[]>(this.uri).pipe(first(), delay(10), tap(setores => console.log(setores)));
	}
	
	save(setor: Partial<Setor>) {
		if(setor._id) {
			return this.update(setor);
		}
		return this.create(setor);
	}
	
	private create(setor: Partial<Setor>) {
		return this.httpClient.post<Setor>(this.uri, setor).pipe(first());
	}
	
	private update(setor: Partial<Setor>) {
		return this.httpClient.put<Setor>(`${this.uri}/${setor._id}`, setor).pipe(first());		
	}
	
	loadById(id: string) {
		return this.httpClient.get<Setor>(`${this.uri}/${id}`);
	}
}