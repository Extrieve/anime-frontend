import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeFetchIdComponent } from './anime-fetch-id/anime-fetch-id.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeNewComponent } from './anime-new/anime-new.component';
import { AnimeTitleSearchComponent } from './anime-title-search/anime-title-search.component';

const routes: Routes = [
  {'path': '', 'redirectTo': 'anime', 'pathMatch': 'full'},
  {'path': 'anime', component : AnimeListComponent},
  {'path': 'anime/save', component : AnimeNewComponent},
  {'path': 'anime/:id', component : AnimeFetchIdComponent},
  {'path': 'anime/title/:search', component : AnimeTitleSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
