import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Setor } from '../../model/setor';

@Component({
	selector: 'app-setores-list',
	templateUrl: './setores-list.component.html',
	styleUrls: ['./setores-list.component.css']
})
export class SetoresListComponent {

	@Input() setores: Setor[] = [];
	@Output() add = new EventEmitter(false);
	@Output() edit = new EventEmitter(false);

	displayedColumns = ['nome', 'porcentagem', 'valor', 'actions'];

	constructor() { 
	}

	ngOnInit(): void {
	}
    
    onAdd() {
		this.add.emit(true);
	}
    
    onEdit(setor: Setor) {
		this.edit.emit(setor);
	}

}
