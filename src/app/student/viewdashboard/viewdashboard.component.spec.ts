import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdashboardComponent } from './viewdashboard.component';

describe('ViewdashboardComponent', () => {
  let component: ViewdashboardComponent;
  let fixture: ComponentFixture<ViewdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
