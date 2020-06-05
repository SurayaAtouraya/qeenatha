import { GlobalService } from 'src/app/global.service';
import { TestDataService } from './../../test-data.service';
import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  isMobile: boolean;

  newestSongs = [];
  newestAlbums = [];
  newestAlbumsCardData = [];
  slidesPerView: number;

  public swiperConfig: SwiperConfigInterface = {
    // a11y: true,
    direction: 'horizontal',
    // loop: true,
    slidesPerView: null,
    // spaceBetween: 50,
    navigation: true,
    pagination: true
};

  constructor(private testDataService: TestDataService, private globalService: GlobalService) { }


  ngOnInit(): void {

    this.globalService.isMobile.subscribe(isMobile => {
      this.isMobile = isMobile;
      if (this.isMobile) {
        this.slidesPerView = 1;
      } else {
        this.slidesPerView = 6;
      }
      this.swiperConfig.slidesPerView = this.slidesPerView;
    });



    // TODO API CALL TO GET LATEST RELEASED ALBUMS (8 NEWEST)
    this.testDataService.newestAlbumCards.subscribe(albums => this.newestAlbums = albums);
    this.newestAlbums.forEach(album => {
      this.newestAlbumsCardData.push(
        {
          imgSrc: album.albumCover,
          title: album.albumName,
          subtitle: album.albumYear,
          dataType: 'album',
          dataID: album.albumName
        }
      );
    });

    // TODO API CALL TO GET 8 random songs of 8 released albums
    this.testDataService.newestSongs.subscribe(songs => {
      const used = [];
      let index = this.gen(songs.length);
      for (let i = 0;  i < 8; i++) {
        while (true) {
          let isUsed = false;
          index = this.gen(songs.length);
          used.forEach(oldI => {
            if (oldI === index) {
              isUsed = true;
            }
          });
          if (!isUsed) {
            break;
          }
        }
        this.newestSongs.push(songs[index]);
        used.push(index);
      }
      console.log(used);
    });
  }

  gen(i: number) {
    return Math.trunc(Math.random() * i - 0.5);
  }

}
