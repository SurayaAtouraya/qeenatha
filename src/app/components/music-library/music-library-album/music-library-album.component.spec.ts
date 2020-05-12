import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibraryAlbumComponent } from './music-library-album.component';

describe('MusicLibraryAlbumComponent', () => {
  let component: MusicLibraryAlbumComponent;
  let fixture: ComponentFixture<MusicLibraryAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibraryAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibraryAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
