import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { IProduct } from '@core/interfaces';
import { environment } from '@environment';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class YujuProductsDB {

  public currentPage = 0;
  public pageCount = 0;
  public perPage = 0;
  public totalCount = 0;

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };

  constructor(
    private shopId: number,
    private http: HttpClient
  ) { }

  public getProducts(page: number): Observable<IProduct[]> {
    if (!this.shopId) {
      throw Error('No shop id was provided');
    }

    const path = `${environment.YUJU_API}/shops/${this.shopId}/products/?page=${page}`;

    return this.http
      .get<IProduct[]>(path, { ...this.httpOptions, observe: 'response' } as any)
      .pipe(
        tap(res => {
          this.currentPage = res['headers'].get('x-pagination-current-page');
          this.pageCount = res['headers'].get('x-pagination-page-count');
          this.perPage = res['headers'].get('x-pagination-per-page');
          this.totalCount = res['headers'].get('x-pagination-total-count');
        }),
        map((res: HttpEvent<IProduct[]>) => res['body']),
        catchError(error => of([])
        )
      );
  }
}
