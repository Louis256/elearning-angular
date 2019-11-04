import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakecourseComponent } from './takecourse.component';

describe('TakecourseComponent', () => {
  let component: TakecourseComponent;
  let fixture: ComponentFixture<TakecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
