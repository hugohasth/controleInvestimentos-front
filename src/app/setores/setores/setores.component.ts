import { Component, OnInit } from '@angular/core';
import { Setor } from '../model/setor';
import { SetoresService } from '../services/setores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit{
	
	setores$: Observable<Setor[]>;
	
	displayedColumns = ['nome','porcentagem','valor'];
	
	constructor(private setoresService: SetoresService ) { 
		this.setores$ = this.setoresService.list();
	}
	
    ngOnInit(): void {
    }
}
