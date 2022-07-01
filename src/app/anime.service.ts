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

  public getAnimeById(animeId: number): Observable<Anime>{
    return this.httpClient.get<Anime>(this.baseUrl + 'anime/' + animeId);
  }

  public getAnimeByName(animeName: string): Observable<Anime>{
    return this.httpClient.get<Anime>(this.baseUrl + 'anime/${string}');
  }

  public saveAnime(anime: Anime): Observable<Anime> {
    return this.httpClient.post<Anime>(this.baseUrl + 'save', Anime);
  }
}
