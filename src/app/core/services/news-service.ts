import { inject, Injectable } from '@angular/core';
import { HttpService, NewsData } from '@core';

import { BehaviorSubject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public news$ = new BehaviorSubject<NewsData | null>(null)
  public item$ = new BehaviorSubject<any | null>(null)
  public isLoading$ = new BehaviorSubject<boolean>(false)

  private http = inject(HttpService)
  private newsTag = 'front_page'
  
  
  public getNews(): void {
    this.isLoading$.next(true)
    this.http.get('https://hn.algolia.com/api/v1/search?tags=' + this.newsTag).pipe(delay(1500)).subscribe({
      next: (res: any) => {
          this.news$.next(res)
          
          console.log(this.news$.value)
        },
        error: () => {
          this.isLoading$.next(false)
        },
        complete: () => {
          this.isLoading$.next(false)
        },
      })
  }


  public getItem(id: string): void {
    this.isLoading$.next(true)
    this.http.get('https://hn.algolia.com/api/v1/items/' + id).pipe(delay(1500)).subscribe({
      next: (res: any) => {
          this.item$.next(res)
          
          console.log(this.item$.value)
        },
        error: () => {
          this.isLoading$.next(false)
        },
        complete: () => {
          this.isLoading$.next(false)
        },
      })
  }

  public getNewsByTitle(params: string | null): void {
    if(params === null) {
      this.getNews()
    }
    else {
      this.isLoading$.next(true)
      this.http.get('https://hn.algolia.com/api/v1/search?query='+ params +'&tags=' + this.newsTag).pipe(delay(1500)).subscribe({
      next: (res: any) => {
          this.news$.next(res)
          
          console.log(this.news$.value)
        },
        error: () => {
          this.isLoading$.next(false)
        },
        complete: () => {
          this.isLoading$.next(false)
        },
      })
    }
  }

  public getNewsByRating(params: {signType: string, ratingValue: number} | null): void {
    if(params === null) {
      this.getNews()
    }
    else {
      this.isLoading$.next(true)
      this.http.get('https://hn.algolia.com/api/v1/search?tags=front_page&numericFilters=points' + params.signType + params.ratingValue).pipe(delay(1500)).subscribe({
        next: (res: any) => {
            this.news$.next(res)
            
            console.log(this.news$.value)
          },
          error: () => {
            this.isLoading$.next(false)
          },
          complete: () => {
            this.isLoading$.next(false)
          },
      })
    }
  }

  public getNewsByPage(page: number): void {
      this.isLoading$.next(true)
      this.http.get('https://hn.algolia.com/api/v1/search?tags=front_page&page=' + page).pipe(delay(1500)).subscribe({
        next: (res: any) => {
            this.news$.next(res)
            
            console.log(this.news$.value)
          },
          error: () => {
            this.isLoading$.next(false)
          },
          complete: () => {
            this.isLoading$.next(false)
          },
      })
    }
    
  
}
