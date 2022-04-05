import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { AboutComponent } from './about/about.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    MusicPlayerComponent,
    AboutComponent,
    SearchBarComponent,
    SongCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
