import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  currentUser: any;
  connected: boolean = true;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.localStorage.getCurrentUser();
  }

  logOut(): void{
    this.localStorage.setLocalStorage('currentUser', null);
    location.reload();
  }

}
