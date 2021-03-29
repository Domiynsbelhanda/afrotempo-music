import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {

  @Input() song: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
