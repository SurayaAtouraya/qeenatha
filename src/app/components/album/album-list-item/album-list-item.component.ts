import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/test-data.service';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.scss']
})
export class AlbumListItemComponent implements OnInit {

  @Input() albumData: Album;

  constructor(private router: Router) { }

  album: Album;

  ngOnInit(): void {
    this.album = this.albumData;
  }

  goToAlbum() {
    this.router.navigate(['/album', this.album.albumName]);
  }

  goToArtist() {
    this.router.navigate(['/artist', 'ARTISTIDHERE']);
  }

  stopDOMTree(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

}
