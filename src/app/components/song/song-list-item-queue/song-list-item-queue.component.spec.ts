import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListItemQueueComponent } from './song-list-item-queue.component';

describe('SongListItemQueueComponent', () => {
  let component: SongListItemQueueComponent;
  let fixture: ComponentFixture<SongListItemQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListItemQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListItemQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
