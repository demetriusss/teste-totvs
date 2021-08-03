import { Component, Input, OnInit } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() users:User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
