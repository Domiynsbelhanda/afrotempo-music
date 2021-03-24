import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loader = false;
  loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject(this.loader);

  constructor() { }

  // tslint:disable-next-line:typedef
  get loading() {
    return this.loader;
  }

  set loading(value) {
    this.loader = value;
    this.loadingStatus.next(value);
  }

  // tslint:disable-next-line:typedef
  startLoading() {
    this.loading = true;
  }

  // tslint:disable-next-line:typedef
  stopLoading() {
    this.loading = false;
  }
}
