import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.css'],
    standalone: true,
    imports: [CdkScrollable, MatDialogContent, MatDialogActions, MatButton]
})
export class ConfirmationDialogComponent implements OnInit {
	
	constructor(
		public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: string,
	) { }

	ngOnInit(): void {
		
	}

	onConfirm(resultado: boolean): void {
		this.dialogRef.close(resultado);
	}

}
