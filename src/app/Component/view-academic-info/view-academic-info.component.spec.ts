import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcademicInfoComponent } from './view-academic-info.component';

describe('ViewAcademicInfoComponent', () => {
  let component: ViewAcademicInfoComponent;
  let fixture: ComponentFixture<ViewAcademicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAcademicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
