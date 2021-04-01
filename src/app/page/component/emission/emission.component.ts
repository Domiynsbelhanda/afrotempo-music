import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-emission',
  templateUrl: './emission.component.html',
  styleUrls: ['./emission.component.css']
})
export class EmissionComponent implements OnInit {

  emission: any;

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {

    this.afs.collection<any>('emission', ref=>ref
      .orderBy('timestamp', 'desc'))
      .valueChanges().subscribe((data)=>{
        this.emission = data
    });
  }

}
