import { Component, Inject, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SetoresService } from '../../services/setores.service';
import { Setor } from '../../model/setor';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit{
	
	setores$: Observable<Setor[]>;
	
	displayedColumns = ['nome','porcentagem','valor','actions'];
	
	constructor(
		private setoresService: SetoresService,
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute ) { 
		this.setores$ = this.setoresService.list().pipe(
			catchError(error => {
				this.onError('Erro ao carregar os setores!');
				return of([])
			})
		);
	}
	
	onError(errorMsg: string) {
		this.dialog.open(ErrorDialogComponent, {
			data: errorMsg,
		});
  }
	
    ngOnInit(): void {
		console.log('Componente SetoresComponent criado!');
    }
    
    onAdd() {
		this.router.navigate(['new'], {relativeTo: this.route});
	}
}
