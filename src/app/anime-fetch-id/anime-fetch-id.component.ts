import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-fetch-id',
  templateUrl: './anime-fetch-id.component.html',
  styleUrls: ['./anime-fetch-id.component.css']
})
export class AnimeFetchIdComponent implements OnInit {

  anime: Anime = new Anime();

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
  }

  public getAnimeById(animeId: number){
    this.animeService.getAnimeById(animeId).subscribe(
      data => {
        this.anime = data;
      }, error => {console.log(error);}
    );
  }


  public goHome(){
    this.router.navigate(['/anime']);
  }
}
