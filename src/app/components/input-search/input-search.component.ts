import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  form: FormGroup;
  @Output() inputChanges = new EventEmitter<User[] | any>();
  @Output() loading = new EventEmitter<boolean>();

  constructor(private userService:UserService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      searchControl: ['']
    });

    this.form?.get('searchControl')?.valueChanges.subscribe(serchtext => {

      if (serchtext !== '') {
        this.loading.emit(true);

        this.userService.list(serchtext).subscribe(results => {
          this.inputChanges.emit(results);
        }, () => {}, () => {this.loading.emit(false);})
      }
    })
  }
}
