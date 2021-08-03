import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'spinner-loading',
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent {

  @Input() loading = false;

}
