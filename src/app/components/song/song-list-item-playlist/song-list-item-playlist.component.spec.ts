import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemPlaylistComponent } from './song-list-item-playlist.component';

describe('SongListItemPlaylistComponent', () => {
  let component: SongListItemPlaylistComponent;
  let fixture: ComponentFixture<SongListItemPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
