import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemAlbumComponent } from './song-list-item-album.component';

describe('SongListItemAlbumComponent', () => {
  let component: SongListItemAlbumComponent;
  let fixture: ComponentFixture<SongListItemAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
