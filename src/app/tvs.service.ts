import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvsService {
  api: string = 'de4aad436c6ca21d1237b8fb23e6e257'
  // https://api.themoviedb.org/3/movie/top_rated
  allTvs: any[] = [];
  constructor(private http: HttpClient) {}

  getAllTvs(pageNumber:number=1,language: string = 'en-US'): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.api}&language=${language}&page=${pageNumber}`
    );
  }
  getTvById(tvId: number): Observable<any> {
    return this.http
      .get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${this.api}
    `);
  }

  searchAllTv(tvName: string): Observable<any> {
    if (tvName == '') {
      return this.getAllTvs();
    } else {
      return this.http.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${this.api}&query=${tvName}`
      );
    }
  }
}
