import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component';

const routes: Routes = [
  {'path': '', 'redirectTo': 'anime', 'pathMatch': 'full'},
  {'path': 'anime', component : AnimeListComponent, 'pathMatch': 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
