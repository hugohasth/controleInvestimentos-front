import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SetoresService } from '../services/setores.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
		private snackBar: MatSnackBar) {
		this.form = this.formBuilder.group({
			nome: [null],
			porcentagem: [null],
			valor: [null]
		});
	}
	
	ngOnInit(): void {
		
	}
	
	onSubmit() {
		this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
	}
	
	onCancel() {
		
	}
	
	onError() {
		this.snackBar.open('Erro ao salvar setor!', '', { duration: 5000 });
	}

}
