import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibraryArtistHeaderComponent } from './music-library-artist-header.component';

describe('MusicLibraryArtistHeaderComponent', () => {
  let component: MusicLibraryArtistHeaderComponent;
  let fixture: ComponentFixture<MusicLibraryArtistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibraryArtistHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibraryArtistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
