import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemPlayerComponent } from './song-list-item-player.component';

describe('SongListItemPlayerComponent', () => {
  let component: SongListItemPlayerComponent;
  let fixture: ComponentFixture<SongListItemPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
