import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card-component.component.html',
  styleUrls: ['./primary-card-component.component.css']
})
export class PrimaryCardComponentComponent implements OnInit {

  @Input() song: any = {};

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
  }

  addDownload(noms: string, downloads: number, vue: number, lin: string) {

    const download = {
      downloads: downloads + 1,
      vue: vue + 2,
    };
    this.afs.collection('chanson').doc(noms).set(download, {merge: true});

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', lin);
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
