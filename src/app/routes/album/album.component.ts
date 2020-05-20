import { TestDataService, Album } from 'src/app/test-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/components/song/song-list-item/song-list-item.component';
import { HeaderData } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  albumHeaderData: Album;
  headerData: HeaderData;
  songs = [];

  constructor(public testDataService: TestDataService, private router: Router) { }

  ngOnInit(): void {

    // TODO PASS THE ALBUMID INTO THE CALL TO GET THE SPECIFIC ALBUM
    let albumID = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    albumID = albumID.split("%20").join(" ");
    console.log(albumID);
    this.testDataService.albumHeaders.subscribe(albumHeaders => {
      albumHeaders.forEach(albumHeader => {
        if (albumHeader.albumName === albumID) {
          this.albumHeaderData = albumHeader;
          console.log(this.albumHeaderData);
        }
      });
    });

    this.headerData = {
      imgSrc: this.albumHeaderData.albumCover,
      desc: this.albumHeaderData.albumDescription,
      title: this.albumHeaderData.albumName,
      subtitle: 'Album',
      subtitle2: this.albumHeaderData.albumArtist + ' • ' +
                 this.albumHeaderData.albumYear + ' • ' +
                 this.albumHeaderData.songCount + ' Songs',
      dataType: 'album',
      dataID: this.albumHeaderData.albumName,
      chips: ['#1 Album of All Time'],
    };

    // TODO PROBABLY WANNA DO THIS ON THE SAME ALBUM CALL
    this.testDataService.albumSongs.subscribe((songs: Song[]) => {
      songs.forEach(song => {
        if (song.albumName === albumID) {
          this.songs.push(song);
        }
      });
    });

  }

}
