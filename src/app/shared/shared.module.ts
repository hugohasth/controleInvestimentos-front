import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { SetorPipe } from './pipes/setor.pipe';



@NgModule({
	declarations: [
		ErrorDialogComponent,
		SetorPipe
	],
	imports: [
		CommonModule,
		AppMaterialModule
	],
	exports: [
		ErrorDialogComponent,
		SetorPipe
	]
})
export class SharedModule { }
