import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-title-search',
  templateUrl: './anime-title-search.component.html',
  styleUrls: ['./anime-title-search.component.css']
})
export class AnimeTitleSearchComponent implements OnInit {

  animeList: Anime[] = [];
  anime_search: string = '';

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
    this.search(this.anime_search);
  }

  public search(title: string){
    return this.animeService.getAnimeByName(title).subscribe(
      data => {
        this.animeList = data;
      }, error => {console.log(error);}
    );
  }

}
