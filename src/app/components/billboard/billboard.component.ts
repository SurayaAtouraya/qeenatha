import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Song } from '../song/song-list-item/song-list-item.component';

export interface PeriodicElement {
  position: string;
  lastWeekPosition: string;
  change: number;
  songName: string;
  artistName: string;
  peak: string;
  duration: string;
  description?: string;
  albumCover: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 1,
//     lastWeek: null,
//     change: null,
//     songName: 'The Box',
//     artistName: 'Roddy Ricch',
//     peak: 1,
//     duration: 3,
//     description: `Hydrogen is a chemical element with duration H and atomic number 1. With a standard
//         atomic peak of 1.008, hydrogen is the lightest element on the periodic table.`,
//     albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 2,
//     lastWeek: 9,
//     change: 7,
//     songName: 'Life is Good',
//     artistName: 'Future ft. Drake',
//     peak: 2,
//     duration: 11,
//     description: `Helium is a chemical element with duration He and atomic number 2. It is a
//         colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
//         group in the periodic table. Its boiling point is the lowest among all the elements.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 3,
//     lastWeek: 2,
//     change: -1,
//     songName: 'Woah',
//     artistName: 'Lil Baby',
//     peak: 1,
//     duration: 9,
//     description: `Lithium is a chemical element with duration Li and atomic number 3. It is a soft,
//         silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
//         lightest solid element.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 4,
//     lastWeek: 4,
//     change: 0,
//     songName: 'Till I Collapse',
//     artistName: 'Eminem',
//     peak: 1,
//     duration: 21,
//     description: `Beryllium is a chemical element with duration Be and atomic number 4. It is a
//         relatively rare element in the universe, usually occurring as a product of the spallation of
//         larger atomic nuclei that have collided with cosmic rays.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 5,
//     lastWeek: 2,
//     change: -3,
//     songName: 'We Dem Boyz',
//     artistName: 'Wiz Khalifa',
//     peak: 5,
//     duration: 54,
//     description: `Boron is a chemical element with duration B and atomic number 5. Produced entirely
//         by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
//         low-abundance element in the Solar system and in the Earth's crust.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 6,
//     lastWeek: 7,
//     change: 1,
//     songName: 'I Love',
//     artistName: 'Joyner Lucas',
//     peak: 3,
//     duration: 3,
//     description: `Carbon is a chemical element with duration C and atomic number 6. It is nonmetallic
//         and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
//         to group 14 of the periodic table.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 7,
//     lastWeek: 10,
//     change: 3,
//     songName: 'The Box',
//     artistName: 'Roddy Ricch',
//     peak: 4,
//     duration: 11,
//     description: `Nitrogen is a chemical element with duration N and atomic number 7. It was first
//         discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 8,
//     lastWeek: 8,
//     change: 0,
//     songName: 'The Box',
//     artistName: 'Roddy Ricch',
//     peak: 1,
//     duration: 9,
//     description: `Oxygen is a chemical element with duration O and atomic number 8. It is a member of
//          the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
//          agent that readily forms oxides with most elements as well as with other compounds.`,
//          albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 9,
//     lastWeek: 7,
//     change: -2,
//     songName: 'The Box',
//     artistName: 'Roddy Ricch',
//     peak: 8,
//     duration: 18,
//     description: `Fluorine is a chemical element with duration F and atomic number 9. It is the
//         lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
//         conditions.`,
//         albumCover: '../../assets/albumCover.png'
//   }, {
//     position: 10,
//     lastWeek: 22,
//     change: 12,
//     songName: 'The Box',
//     artistName: 'Roddy Ricch',
//     peak: 10,
//     duration: 16,
//     description: `Neon is a chemical element with duration Ne and atomic number 10. It is a noble gas.
//         Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
//         two-thirds the density of air.`,
//         albumCover: '../../assets/albumCover.png'
//   },
// ];


@Component({
  selector: 'app-billboard',
  templateUrl: './billboard.component.html',
  styleUrls: ['./billboard.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class BillboardComponent implements OnInit {

  @Input() songData: Song[];

  dataSource: MatTableDataSource<Song>;
  columnsToDisplay = ['position', 'lastWeekPosition', 'songArtistName', 'peak', 'duration', 'albumCover'];
  expandedElement: PeriodicElement | null;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.songData);
    this.dataSource.sort = this.sort;
  }

}
