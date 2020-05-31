import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillboardComponent } from './components/billboard/billboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsDialogComponent } from './components/settings-dialog/settings-dialog.component';
import { LogInDialogComponent } from './components/log-in-dialog/log-in-dialog.component';
import { ArtistComponent } from './routes/artist/artist.component';
import { AlbumComponent } from './routes/album/album.component';
import { HomeComponent } from './routes/home/home.component';
import { MusicLibraryComponent } from './routes/music-library/music-library.component';
import { SongListItemComponent } from './components/song/song-list-item/song-list-item.component';
import { SongListItemAlbumComponent } from './components/song/song-list-item-album/song-list-item-album.component';
import { SongListItemArtistComponent } from './components/song/song-list-item-artist/song-list-item-artist.component';
import { ArtistListItemComponent } from './components/artist/artist-list-item/artist-list-item.component';
import { PlaylistDialogComponent } from './components/playlist/playlist-dialog/playlist-dialog.component';
import { PlaylistTabComponent } from './components/playlist/playlist-tab/playlist-tab.component';
import { PlayerToolbarComponent } from './components/player-toolbar/player-toolbar.component';
import { MobileDisplayComponent } from './components/mobile-display/mobile-display.component';
import { SongListItemPlayerComponent } from './components/song/song-list-item-player/song-list-item-player.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MusicLibrarySongComponent } from './components/music-library/music-library-song/music-library-song.component';
import { MusicLibraryAlbumComponent } from './components/music-library/music-library-album/music-library-album.component';
import { MusicLibraryArtistComponent } from './components/music-library/music-library-artist/music-library-artist.component';
import { MusicLibraryPlaylistComponent } from './components/music-library/music-library-playlist/music-library-playlist.component';
import { MusicLibrarySongEmptyComponent } from './components/music-library/music-library-song-empty/music-library-song-empty.component';
import { SongListItemLikedSongComponent } from './components/song/song-list-item-liked-song/song-list-item-liked-song.component';
import { MusicLibraryArtistHeaderComponent } from './components/music-library/music-library-artist-header/music-library-artist-header.component';
import { BillboardsComponent } from './routes/billboards/billboards.component';
import { PlaylistComponent } from './routes/playlist/playlist.component';
import { SearchComponent } from './routes/search/search.component';
import { SearchBarComponent } from './components/search/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import { SearchFilterChipsetComponent } from './components/search/search-filter-chipset/search-filter-chipset.component';
import { AlbumListItemComponent } from './components/album/album-list-item/album-list-item.component';
import { MusicLibraryAlbumHeaderComponent } from './components/music-library/music-library-album-header/music-library-album-header.component';
import { SongsComponent } from './routes/songs/songs.component';
import { SongListItemPlaylistComponent } from './components/song/song-list-item-playlist/song-list-item-playlist.component';
import { QueueComponent } from './components/queue/queue.component';
import { RadioComponent } from './routes/radio/radio.component';
import { CardComponent } from './components/card/card.component';
import { SignUpDialogComponent } from './components/sign-up-dialog/sign-up-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SongListItemQueueComponent } from './components/song/song-list-item-queue/song-list-item-queue.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlaylistAddComponent } from './components/playlist/playlist-add/playlist-add.component';
import { TestComponent } from './routes/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    BillboardComponent,
    SongListItemComponent,
    SongListItemAlbumComponent,
    SongListItemArtistComponent,
    NavbarComponent,
    ArtistListItemComponent,
    SearchFilterChipsetComponent,
    SettingsDialogComponent,
    LogInDialogComponent,
    ArtistComponent,
    AlbumComponent,
    HomeComponent,
    PlaylistDialogComponent,
    SongListItemArtistComponent,
    MusicLibraryComponent,
    PlaylistTabComponent,
    PlayerToolbarComponent,
    MobileDisplayComponent,
    SongListItemPlayerComponent,
    SideMenuComponent,
    MusicLibrarySongComponent,
    MusicLibraryAlbumComponent,
    MusicLibraryArtistComponent,
    MusicLibraryPlaylistComponent,
    MusicLibrarySongEmptyComponent,
    SongListItemLikedSongComponent,
    MusicLibraryArtistHeaderComponent,
    BillboardsComponent,
    PlaylistComponent,
    SearchComponent,
    SearchBarComponent,
    SearchResultsComponent,
    AlbumListItemComponent,
    MusicLibraryAlbumHeaderComponent,
    SongsComponent,
    SongListItemPlaylistComponent,
    QueueComponent,
    RadioComponent,
    CardComponent,
    SignUpDialogComponent,
    HeaderComponent,
    SongListItemQueueComponent,
    PlaylistAddComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
