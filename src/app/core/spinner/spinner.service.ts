import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private _loading = false;
  loadingStatus: Subject<boolean> = new Subject<boolean>();

  public get loading(): boolean {
    return this._loading;
  }

  public set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  public startLoading() {
    this.loading = true;
  }

  public stopLoading() {
    this.loading = false;
  }
}
