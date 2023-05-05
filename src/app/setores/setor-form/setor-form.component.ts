import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setor-form',
  templateUrl: './setor-form.component.html',
  styleUrls: ['./setor-form.component.css']
})
export class SetorFormComponent {
	
	form: FormGroup;
	
	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			nome: [null],
			porcentagem: [null],
			valor: [null]
		});
	}
	
	ngOnInit(): void {
		
	}
	
	onSubmit() {
		
	}
	
	onCancel() {
		
	}

}
