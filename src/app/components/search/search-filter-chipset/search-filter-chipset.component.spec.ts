import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterChipsetComponent } from './search-filter-chipset.component';

describe('SearchFilterChipsetComponent', () => {
  let component: SearchFilterChipsetComponent;
  let fixture: ComponentFixture<SearchFilterChipsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterChipsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterChipsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
