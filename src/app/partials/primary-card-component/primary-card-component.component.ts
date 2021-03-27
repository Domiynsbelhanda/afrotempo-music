import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card-component.component.html',
  styleUrls: ['./primary-card-component.component.css']
})
export class PrimaryCardComponentComponent implements OnInit {

  @Input() song: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
