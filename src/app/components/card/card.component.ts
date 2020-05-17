import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: CardData;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDest() {
    // TODO PASS THE ALBUM ID HERE IN THE FUTURE
    console.log('/' + this.cardData.dataType);
    this.router.navigate(['/' + this.cardData.dataType + '/', this.cardData.dataID]); // ID
  }

  stopDOMTree(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
  }
}

export interface CardData {
  imgSrc: string;
  title: string;
  subtitle?: string;
  dataType: string;
  dataID: string;
}
