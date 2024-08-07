import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Setor } from '../model/setor';
import { delay, first, tap } from 'rxjs';
import { SetorPage } from '../model/setor-page';

@Injectable({
	providedIn: 'root'
})

export class SetoresService {
	
	private readonly uri = '/api/setores'

	constructor(private httpClient : HttpClient) { }

	list(pageNumber = 0, pageSize = 10) {
		return this.httpClient.get<SetorPage>(this.uri, {params: {pageNumber, pageSize}}).pipe(first(), delay(10), tap(setores => console.log(setores)));
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
	
	remove(id: string) {
		return this.httpClient.delete(`${this.uri}/${id}`).pipe(first());		
	}
	
	loadById(id: string) {
		return this.httpClient.get<Setor>(`${this.uri}/${id}`);
	}
}