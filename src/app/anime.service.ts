import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private baseUrl = 'http://localhost:8080/api/v1/';

  constructor(private httpClient: HttpClient) { }

  public getAnimeList(): Observable<Anime[]> {
    return this.httpClient.get<Anime[]>(this.baseUrl + 'anime');
  }
}
