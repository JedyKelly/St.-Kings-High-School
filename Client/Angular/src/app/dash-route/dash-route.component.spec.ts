import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRouteComponent } from './dash-route.component';

describe('DashRouteComponent', () => {
  let component: DashRouteComponent;
  let fixture: ComponentFixture<DashRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
