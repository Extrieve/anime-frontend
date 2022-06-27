import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeFetchIdComponent } from './anime-fetch-id/anime-fetch-id.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeNewComponent } from './anime-new/anime-new.component';

const routes: Routes = [
  {'path': '', 'redirectTo': 'anime', 'pathMatch': 'full'},
  {'path': 'anime', component : AnimeListComponent, 'pathMatch': 'full'},
  {'path': 'anime/:id', component : AnimeFetchIdComponent, 'pathMatch': 'full'},
  {'path': 'anime/new', component : AnimeNewComponent, 'pathMatch': 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
