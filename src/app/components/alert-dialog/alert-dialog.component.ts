import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";

export interface DialogData {
  message: string;
  titulo: string;
}

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent {

  @Output() static confirm = new EventEmitter<boolean>();
  title: string;
  message: string;
  dialogRef: MatDialogRef<AlertDialogComponent>;

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  open(message: string, titulo?:string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = { message: message, titulo: titulo };
    this.dialogRef = this.dialog.open(AlertDialogComponent, dialogConfig);
  }

  action(): void {
    AlertDialogComponent.confirm.emit(true);
  }
}
