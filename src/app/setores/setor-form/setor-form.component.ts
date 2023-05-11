import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SetoresService } from '../services/setores.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent {
	
	form: FormGroup;
	
	constructor(
		private formBuilder: FormBuilder,
		private service: SetoresService,
		private snackBar: MatSnackBar,
		private location: Location) {
		this.form = this.formBuilder.group({
			nome: [null],
			porcentagem: [null],
			valor: [null]
		});
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
