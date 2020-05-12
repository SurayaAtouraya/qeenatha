import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibrarySongEmptyComponent } from './music-library-song-empty.component';

describe('MusicLibrarySongEmptyComponent', () => {
  let component: MusicLibrarySongEmptyComponent;
  let fixture: ComponentFixture<MusicLibrarySongEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibrarySongEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibrarySongEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
