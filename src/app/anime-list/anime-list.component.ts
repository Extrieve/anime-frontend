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
  title: string = '';

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
    this.getAnimeList();

    // console.log(this.animeService.getAnimeList().subscribe(data => {
    //   console.log(data);
    // }));

    console.log(this.animeService.getAnimeByName("Kaguya").subscribe(data => {
      console.log(data);
    }));
  }

  public onSelect(id: number){
    this.router.navigate(['/anime', id]);
  }

  public getAnimeList(){
    this.title = '';
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

  public goToCreateAnime(){
    this.router.navigate(['/anime/new']);
  }

  public search(title: string){
    console.log(title);
    return this.animeService.getAnimeByName(title).subscribe(
      data => {
        this.animeList = data;
      }, error => {console.log(error);}
    );
  }
}
