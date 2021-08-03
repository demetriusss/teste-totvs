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

  constructor(private userService: UserService) {}

  getInputChanges(results:User[]|any): void{
    console.log(results);
    this.users = results.items;
  }

  ngOnInit() {
    this.userService.list("de").subscribe((result) => {
      this.users = result.items;
      console.log(result.items);
    });
  }
}
