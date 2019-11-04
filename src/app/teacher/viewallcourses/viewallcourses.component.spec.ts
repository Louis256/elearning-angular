import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcoursesComponent } from './viewallcourses.component';

describe('ViewallcoursesComponent', () => {
  let component: ViewallcoursesComponent;
  let fixture: ComponentFixture<ViewallcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
