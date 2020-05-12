import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibraryArtistComponent } from './music-library-artist.component';

describe('MusicLibraryArtistComponent', () => {
  let component: MusicLibraryArtistComponent;
  let fixture: ComponentFixture<MusicLibraryArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibraryArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibraryArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
