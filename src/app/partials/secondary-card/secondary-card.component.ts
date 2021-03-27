import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css']
})
export class SecondaryCardComponent implements OnInit {

  @Input() song: any = {};
  @Input() indice: any;

  constructor() { }

  ngOnInit(): void {
  }

}
