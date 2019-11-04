import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseresultComponent } from './courseresult.component';

describe('CourseresultComponent', () => {
  let component: CourseresultComponent;
  let fixture: ComponentFixture<CourseresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
