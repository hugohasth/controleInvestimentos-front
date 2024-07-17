import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SetoresService } from '../../services/setores.service';
import { Setor } from '../../model/setor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { SetorPage } from '../../model/setor-page';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css']
})
export class SetoresComponent implements OnInit{
	
	setores$: Observable<SetorPage>|null = null;
	
	@ViewChild(MatPaginator) paginator!: MatPaginator;
	
	pageIndex = 0;
	pageSize = 10;
	
	displayedColumns = ['nome','porcentagem','valor','actions'];
	
	constructor(
		private setoresService: SetoresService,
		public dialog: MatDialog,
		private router: Router,
		private route: ActivatedRoute,
		private snackBar: MatSnackBar ) { 
			this.refresh();
	}
	
	refresh(pageEvent: PageEvent = {length: 0, pageIndex: 0, pageSize: 10}) {
		this.setores$ = this.setoresService.list(pageEvent.pageIndex, pageEvent.pageSize).pipe(
			tap(() => {
				this.pageIndex = pageEvent.pageIndex;
				this.pageSize = pageEvent.pageSize;
			}),
			catchError(error => {
				this.onError('Erro ao carregar os setores!');
				return of({setores: [], totalElements: 0, totalPages: 0})
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
    
    onEdit(setor: Setor) {
		this.router.navigate(['edit', setor._id], {relativeTo: this.route});
	}
    
    onRemove(setor: Setor) {

		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: 'Tem certeza que deseja remover esse setor?',
		});

		dialogRef.afterClosed().subscribe((result: boolean) => {
			if (result) {
				this.setoresService.remove(setor._id).subscribe(
					() => {
						this.refresh();
						this.snackBar.open('Setor removido com sucesso!', 'X', {
							duration: 5000,
							verticalPosition: 'top',
							horizontalPosition: 'center'
						});
					},
					() => this.onError('Erro ao tentar remover setor.')
				);
			}
		});
	    
		
	}
}
