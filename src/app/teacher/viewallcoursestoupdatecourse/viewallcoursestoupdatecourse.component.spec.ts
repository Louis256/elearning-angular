import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcoursestoupdatecourseComponent } from './viewallcoursestoupdatecourse.component';

describe('ViewallcoursestoupdatecourseComponent', () => {
  let component: ViewallcoursestoupdatecourseComponent;
  let fixture: ComponentFixture<ViewallcoursestoupdatecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallcoursestoupdatecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcoursestoupdatecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
