import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  loading = false;
  loadingSubscription!: Subscription;

  constructor(private loadingService: LoadingService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadingSubscription = this.loadingService.loadingStatus.subscribe(
      (value) => {
        this.loading = value;
      }
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
