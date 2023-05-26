import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SetorPipe } from './pipes/setor.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';



@NgModule({
	declarations: [
		ErrorDialogComponent,
		SetorPipe,
  		ConfirmationDialogComponent
	],
	imports: [
		CommonModule,
		AppMaterialModule
	],
	exports: [
		ErrorDialogComponent,
  		ConfirmationDialogComponent,
		SetorPipe
	]
})
export class SharedModule { }
