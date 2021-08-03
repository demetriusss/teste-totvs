import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";
import { User } from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users:User[];
  loading = false;

  constructor(private userService: UserService) {}

  getInputChanges(results:User[]|any): void{
    this.users = results.items;
  }

  getLoadingChanges(loading:boolean): void {
    this.loading = loading;
  }

  ngOnInit() {
  }
}
