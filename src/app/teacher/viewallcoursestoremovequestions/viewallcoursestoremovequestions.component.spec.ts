import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcoursestoremovequestionsComponent } from './viewallcoursestoremovequestions.component';

describe('ViewallcoursestoremovequestionsComponent', () => {
  let component: ViewallcoursestoremovequestionsComponent;
  let fixture: ComponentFixture<ViewallcoursestoremovequestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallcoursestoremovequestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcoursestoremovequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
