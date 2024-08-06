import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Setor } from '../../model/setor';
import { SetorPipe } from '../../../shared/pipes/setor.pipe';
import { MatMiniFabButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-setores-list',
    templateUrl: './setores-list.component.html',
    styleUrls: ['./setores-list.component.css'],
    standalone: true,
    imports: [MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatIcon, MatMiniFabButton, MatIconButton, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, SetorPipe, CommonModule]
})
export class SetoresListComponent {

	@Input() setores: Setor[] = [];
	@Output() add = new EventEmitter(false);
	@Output() edit = new EventEmitter(false);
	@Output() remove = new EventEmitter(false);

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
    
    onRemove(setor: Setor) {
		this.remove.emit(setor);
	}

}
