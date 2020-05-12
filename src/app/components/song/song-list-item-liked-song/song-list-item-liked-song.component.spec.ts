import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemLikedSongComponent } from './song-list-item-liked-song.component';

describe('SongListItemLikedSongComponent', () => {
  let component: SongListItemLikedSongComponent;
  let fixture: ComponentFixture<SongListItemLikedSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemLikedSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemLikedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
