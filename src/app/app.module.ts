import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeNewComponent } from './anime-new/anime-new.component';
import { AnimeFetchIdComponent } from './anime-fetch-id/anime-fetch-id.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeNewComponent,
    AnimeFetchIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
