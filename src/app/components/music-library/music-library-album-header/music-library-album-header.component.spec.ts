import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibraryAlbumHeaderComponent } from './music-library-album-header.component';

describe('MusicLibraryAlbumHeaderComponent', () => {
  let component: MusicLibraryAlbumHeaderComponent;
  let fixture: ComponentFixture<MusicLibraryAlbumHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibraryAlbumHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibraryAlbumHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
