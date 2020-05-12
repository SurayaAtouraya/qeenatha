import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibraryPlaylistComponent } from './music-library-playlist.component';

describe('MusicLibraryPlaylistComponent', () => {
  let component: MusicLibraryPlaylistComponent;
  let fixture: ComponentFixture<MusicLibraryPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibraryPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibraryPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
