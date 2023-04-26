import { Component, OnInit } from '@angular/core';
import { Setor } from '../model/setor';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit{
	
	setores: Setor[] = [ {_id: '1', nome: '"AÇÕES(BRASIL)"', porcentagem: 55.00, valor: 36252.63}];
	
	displayedColumns = ['nome','porcentagem','valor'];
	
	constructor() { }
	
    ngOnInit(): void {

    }
}
