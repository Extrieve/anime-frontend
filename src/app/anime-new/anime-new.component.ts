import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-new',
  templateUrl: './anime-new.component.html',
  styleUrls: ['./anime-new.component.css']
})
export class AnimeNewComponent {

  anime: Anime = new Anime();

  constructor(private router: Router, private animeService: AnimeService) { }

  public onSubmit(){
    this.saveAnime(this.anime);
    this.goHome();
  }

  public saveAnime(anime: Anime){
    this.animeService.saveAnime(anime).subscribe(
      data => {
        console.log(data);
      }, error => {console.log(error);}
    );
  }

  public goHome(){
    this.router.navigate(['/anime']);
  }
}
