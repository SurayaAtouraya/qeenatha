import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemArtistComponent } from './song-list-item-artist.component';

describe('SongListItemArtistComponent', () => {
  let component: SongListItemArtistComponent;
  let fixture: ComponentFixture<SongListItemArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
