import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClipboardService } from 'ngx-clipboard'
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-primary-card',
  templateUrl: './primary-card-component.component.html',
  styleUrls: ['./primary-card-component.component.css']
})
export class PrimaryCardComponentComponent implements OnInit {

  @Input() song: any = {};

  loadAPI: Promise<any>;

  constructor(
    private afs: AngularFirestore,
    private _clipboardService: ClipboardService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      this.configService.loadScripts();
    });
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

  copier(url: string){
    this._clipboardService.copy(url)
    alert("Url copier avec succes")
  }

}
