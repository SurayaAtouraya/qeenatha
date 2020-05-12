import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist-list-item/artist-list-item.component';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.scss']
})
export class ArtistHeaderComponent implements OnInit {

  artist: Artist;
  subscribed: boolean;
  subscribeText: string;

  constructor() { }

  ngOnInit(): void {

    this.subscribed = false;
    this.subscribeText = 'SUBSCRIBE';

    this.artist = {
      artistName: 'Ashur Bet Sargis',
      // albumYear: '2007',
      artistCoverPhoto: 'https://www.qeenatha.com/qartistimg/1024/1024/0/0ec6d94_14photo.jpg',
      // albumArtist: 'J Cole',
      artistDescription: 'Ashur Bet Sargis (Syriac: ܐܫܘܪ ܒܝܬ ܣܪܓܝܤ‎, born 2 July 1949) is an Assyrian singer, composer, guitarist and activist. He became famous in the Assyrian communities worldwide for his nationalistic songs in the 1970s. His career peaked, and became prominent, in the 1990s with five albums released within that decade. His songs usually tend to be sentimental ballads and anthems, although he has made a number of folk dance music as well. To the contrast of his Assyrian peers in music, Ashur\'s music is slow and mellow. He is also known for incorporating Greek musical instruments such as Tambouras to his music.',
      artistSubscribers: '2.7K'
    };
  }

  subscribe() {
    if (this.subscribed) {
      this.subscribed = false;
      this.subscribeText = 'SUBSCRIBE';
    } else {
      this.subscribed = true;
      this.subscribeText = 'SUBSCRIBED';
    }
  }

}
