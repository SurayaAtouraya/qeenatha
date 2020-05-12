import { Component, OnInit } from '@angular/core';
import { Artist } from '../../artist/artist-list-item/artist-list-item.component';

@Component({
  selector: 'app-music-library-song',
  templateUrl: './music-library-song.component.html',
  styleUrls: ['./music-library-song.component.scss']
})
export class MusicLibrarySongComponent implements OnInit {

  constructor() { }

  artist: Artist;

  ngOnInit(): void {
    this.artist = {
      artistName: 'Ashur Bet Sargis',
      // albumYear: '2007',
      artistCoverPhoto: 'https://firebasestorage.googleapis.com/v0/b/qeenatha-ceafb.appspot.com/o/1.jpg?alt=media&token=1ef6ca37-f182-480e-9068-7bad08b8cfc8',
      // albumArtist: 'J Cole',
      artistDescription: 'Ashur Bet Sargis (Syriac: ܐܫܘܪ ܒܝܬ ܣܪܓܝܤ‎, born 2 July 1949) is an Assyrian singer, composer, guitarist and activist. He became famous in the Assyrian communities worldwide for his nationalistic songs in the 1970s. His career peaked, and became prominent, in the 1990s with five albums released within that decade. His songs usually tend to be sentimental ballads and anthems, although he has made a number of folk dance music as well. To the contrast of his Assyrian peers in music, Ashur\'s music is slow and mellow. He is also known for incorporating Greek musical instruments such as Tambouras to his music.',
      artistSubscribers: '2.7K'
    };
  }

}
