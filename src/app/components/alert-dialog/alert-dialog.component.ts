import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";

export interface DialogData {
  user:User
}

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  dialogConfig = new MatDialogConfig();
  dialogRef: MatDialogRef<AlertDialogComponent>;

  constructor(public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private userService:UserService) { }

  open(userLogin: string): void {
    this.userService.get(userLogin).subscribe(user => {
      this.dialogConfig.data = {user: user};
      this.dialogRef = this.dialog.open(AlertDialogComponent, this.dialogConfig);
    })
  }
}
