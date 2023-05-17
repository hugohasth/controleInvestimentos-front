import { Component, Input } from '@angular/core';
import { Setor } from '../model/setor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-setores-list',
	templateUrl: './setores-list.component.html',
	styleUrls: ['./setores-list.component.css']
})
export class SetoresListComponent {

	@Input() setores: Setor[] = [];

	displayedColumns = ['nome', 'porcentagem', 'valor', 'actions'];

	constructor(
		private router: Router,
		private route: ActivatedRoute) { 
	}

	ngOnInit(): void {
	}
    
    onAdd() {
		this.router.navigate(['new'], {relativeTo: this.route});
	}

}
