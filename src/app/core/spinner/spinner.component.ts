import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  public isSpinnerLoading = false;
  public loadingSubscription: Subscription;

  constructor(private argoLoadingScreenService: SpinnerService) { }

  public ngOnInit(): void {
    this.loadingSubscription = this.argoLoadingScreenService.loadingStatus.pipe(
      debounceTime(100)
    ).subscribe((value: boolean) => {
      this.isSpinnerLoading = value;
    });
  }

  public ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

}
