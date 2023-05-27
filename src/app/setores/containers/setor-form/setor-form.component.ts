import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SetoresService } from '../../services/setores.service';
import { Setor } from '../../model/setor';
import { ActivatedRoute } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent {
	
	form = this.formBuilder.group({
			_id: [''],
			nome: ['',[Validators.required]],
			porcentagem: new FormControl<number|null|undefined>(null, [Validators.required, Validators.pattern("^\d*\.?\d*$")]),
			valor: new FormControl<number|null|undefined>(null, [Validators.required, Validators.pattern("^\d*\.?\d*$")])
		});
		
	  nomes: string[] = [
	    'AÇÕES (BRASIL)',
	    'AÇÕES (USA)',
	    'FII(FUNDOS IMOBILIÁRIOS)',
	    'CRIPTOMOEDAS',
	    'OURO',
	    'TESOURO DIRETO',
	    'RESERVA DE OPORTUNIDADE FUNDO DI',
	    'RENDA FIXA'
	  ];		
	
	constructor(
		private formBuilder: FormBuilder,
		private service: SetoresService,
		private snackBar: MatSnackBar,
		private location: Location,
		private route: ActivatedRoute) {
			
	}
	nome: string = '';
	
	ngOnInit(): void {
		const setor: Setor = this.route.snapshot.data['setor'];
		console.log(setor);
		this.form.setValue({
			_id: setor._id,
			nome: setor.nome,
			porcentagem: setor.porcentagem,
			valor: setor.valor
		})
	}
	
	onSubmit() {
		const idValue = this.form.value._id || undefined;
		const nomeValue = this.form.value.nome || undefined;
		const updatedValues = { ...this.form.value, _id:idValue, nome: nomeValue };
		this.service.save(updatedValues).subscribe(result => this.onSucces(), error => this.onError());
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
	
	getErrorMessage(fieldName: string) {
		const field = this.form.get(fieldName);
		if(field?.hasError('required')) {
			return 'Campo obrigatório';
		}
		if(field?.hasError('pattern')) {
			return 'Somente números';
		}
		
		return 'Campo inválido';
	}

}
