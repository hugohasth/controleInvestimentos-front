import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

	constructor() { }
	
	validateAllFormFields(formGroup : UntypedFormArray | UntypedFormGroup) {
		Object.keys(formGroup.controls).forEach(field => {
			const control = formGroup.get(field);
			
			if(control instanceof UntypedFormControl) {
				control.markAsTouched({onlySelf : true});
			} else if(control instanceof UntypedFormArray || control instanceof UntypedFormGroup) {
				control.markAsTouched({onlySelf : true});
				this.validateAllFormFields(control);
			}
		} )
	}
	
	getErrorMessage(formGroup : UntypedFormGroup, fieldName: string) {
		const field = formGroup.get(fieldName) as UntypedFormControl;
		return this.getErrorMessageFromField(field);
	}
	
	getErrorMessageFromField(field : UntypedFormControl) {
		if(field?.hasError('required')) {
			return 'Campo obrigatório';
		}
		if(field?.hasError('pattern')) {
			return 'Somente números';
		}
		
		return 'Campo inválido';
	}
	
	getFormArrayFieldErrorMessage(formGroup : UntypedFormGroup, formArrayName: string, fieldName: string, index : number) {
		const formArray = formGroup.get(formArrayName) as UntypedFormArray;
		const field = formArray.controls[index].get(fieldName) as UntypedFormControl;
		return this.getErrorMessageFromField(field);
	}
	
	isFormArrayRequired(formGroup : UntypedFormGroup, formArrayName : string) {
		const ativos = formGroup.get(formArrayName) as UntypedFormArray;
		return !ativos.valid && ativos.hasError('required') && ativos.touched;
	}
}
