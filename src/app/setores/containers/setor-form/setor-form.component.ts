import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, UntypedFormArray, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SetoresService } from '../../services/setores.service';
import { Setor } from '../../model/setor';
import { ActivatedRoute } from '@angular/router';
import { Ativo } from '../../model/ativo';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent {

	form!: FormGroup;
		
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
		private route: ActivatedRoute,
		public formUtils: FormUtilsService) {
			
	}
	nome: string = '';
	
	ngOnInit(): void {
		const setor: Setor = this.route.snapshot.data['setor'];		
	
		this.form = this.formBuilder.group({
			_id: [setor._id],
			nome: [setor.nome, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
			porcentagem: new FormControl<number | null | undefined>(setor.porcentagem, [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")]),
			valor: new FormControl<number | null | undefined>(setor.valor, [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")]),
			ativos: this.formBuilder.array(this.retrieveAtivos(setor), Validators.required)
		});
	}

	private retrieveAtivos(setor: Setor) {
		const ativos = [];
		if (setor?.ativos) {
			setor.ativos.forEach(ativo => ativos.push(this.createAtivo(ativo)));
		} else {
			ativos.push(this.createAtivo());
		}
		return ativos;
	}

	private createAtivo(ativo: Ativo = { _id: '', nome: '', sigla: '', tipo: '', segmento: '' }) {
		return this.formBuilder.group({
			id: [ativo._id],
			nome: [ativo.nome, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
			sigla: [ativo.sigla, [Validators.required]],
			tipo: [ativo.tipo, [Validators.required]],
			segmento: [ativo.segmento, [Validators.required]]
		});
	}
	
	addNewAtivo() {
		const ativos = this.form.get('ativos') as UntypedFormArray;
		ativos.push(this.createAtivo())
	}
	
	removeAtivo(index: number) {
		const ativos = this.form.get('ativos') as UntypedFormArray;
		ativos.removeAt(index);
	}

	getAtivosFormArray() {
		return (<UntypedFormArray>this.form.get('ativos')).controls;
	}
	
	onSubmit() {
		if(this.form.valid) {
			this.service.save(this.form.value).subscribe(result => this.onSucces(), error => this.onError());
		} else {
			this.formUtils.validateAllFormFields(this.form);
		}
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
