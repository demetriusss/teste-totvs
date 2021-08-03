import { Component, Input, OnInit } from '@angular/core';
import { User } from "../../models/User";
import {AlertDialogComponent} from "../alert-dialog/alert-dialog.component";

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() users:User[] = [];

  constructor(private alertDialog: AlertDialogComponent) { }

  ngOnInit(): void {
  }

  openModal(userLogin:string | any){
    this.alertDialog.open(userLogin);
  }

}
