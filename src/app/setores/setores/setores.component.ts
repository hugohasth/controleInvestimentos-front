import { Component, OnInit } from '@angular/core';
import { Setor } from '../model/setor';
import { SetoresService } from '../services/setores.service';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit{
	
	setores: Setor[] = [];
	
	displayedColumns = ['nome','porcentagem','valor'];
	
	constructor(private setoresService: SetoresService ) { }
	
    ngOnInit(): void {
		this.setores = this.setoresService.list();
    }
}
