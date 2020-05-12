import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillboardsComponent } from './billboards.component';

describe('BillboardsComponent', () => {
  let component: BillboardsComponent;
  let fixture: ComponentFixture<BillboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
