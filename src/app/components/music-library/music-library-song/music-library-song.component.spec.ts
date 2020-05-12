import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLibrarySongComponent } from './music-library-song.component';

describe('MusicLibrarySongComponent', () => {
  let component: MusicLibrarySongComponent;
  let fixture: ComponentFixture<MusicLibrarySongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLibrarySongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLibrarySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
