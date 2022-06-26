import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animeList: Anime[] = [];

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
    this.getAnimeList();
  }

  public getAnimeList(){
    this.animeService.getAnimeList().subscribe(
      data => {
        this.animeList = data;
      }, err => {console.log(err);}
    );
  }

  public goToAnimeList(){
    this.getAnimeList();
    this.router.navigate(['/anime']);
  }

}
