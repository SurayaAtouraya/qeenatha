import { RadioComponent } from './routes/radio/radio.component';
import { SongsComponent } from './routes/songs/songs.component';
import { SearchComponent } from './routes/search/search.component';
import { PlaylistComponent } from './routes/playlist/playlist.component';
import { BillboardsComponent } from './routes/billboards/billboards.component';
import { MusicLibraryComponent } from './routes/music-library/music-library.component';
import { HomeComponent } from './routes/home/home.component';
import { AlbumComponent } from './routes/album/album.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './routes/artist/artist.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'radio', component: RadioComponent},
  { path: 'songs/:id', component: SongsComponent},
  { path: 'library', component: MusicLibraryComponent},
  { path: 'billboards', component: BillboardsComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: 'album/:id', component: AlbumComponent},
  { path: 'playlist/:id', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
