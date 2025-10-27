import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheResponse } from './cache-decorator';

@Injectable(
  { providedIn: 'root' }
)
export class HttpService {
  private http = inject(HttpClient)
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  public get(url: string): Observable<any> {
    return this.http.get(url, {
      headers: this.headers
    })
  }

 /*  @CacheResponse(1000000)
  public getWithCache(url: string): Observable<any> {
    return this.http.get(url, {
      headers: this.headers
    })
  } */
}
