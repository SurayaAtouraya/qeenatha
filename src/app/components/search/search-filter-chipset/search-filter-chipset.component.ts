import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter-chipset',
  templateUrl: './search-filter-chipset.component.html',
  styleUrls: ['./search-filter-chipset.component.scss']
})
export class SearchFilterChipsetComponent implements OnInit {

  @Output() filter = new EventEmitter<string>();
  selectedFilter: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedFilter = null;
  }

  filterSearch(filterType: string) {
      if (this.selectedFilter === filterType) {
        this.selectedFilter = null;
        this.filter.emit(null);
      } else {
        this.selectedFilter = filterType;
        this.filter.emit(filterType);
      }
  }

}
