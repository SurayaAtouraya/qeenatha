import { Component, OnInit, Input } from '@angular/core';
import { TestDataService } from 'src/app/test-data.service';
import { GlobalService } from 'src/app/global.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() slides: any[];
  @Input() slideType: string;

  isMobile: boolean;

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
  }
}
