import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SetoresService } from '../../services/setores.service';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent {
	
	form = this.formBuilder.group({
			nome: new FormControl<string|null|undefined>(''),
			porcentagem: new FormControl<number|null|undefined>(null),
			valor: new FormControl<number|null|undefined>(null)
		});
	
	constructor(
		private formBuilder: FormBuilder,
		private service: SetoresService,
		private snackBar: MatSnackBar,
		private location: Location) {
			
	}
	
	ngOnInit(): void {
		
	}
	
	onSubmit() {
		this.service.save(this.form.value).subscribe(result => this.onSucces(), error => this.onError());
	}
	
	onCancel() {
		this.location.back();
	}
	
	onSucces() {
		this.snackBar.open('Setor salvo com sucesso!', '', { duration: 5000 });
		this.onCancel();
	}
	
	onError() {
		this.snackBar.open('Erro ao salvar setor!', '', { duration: 5000 });
	}

}
