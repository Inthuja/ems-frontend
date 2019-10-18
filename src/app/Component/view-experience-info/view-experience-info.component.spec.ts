import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExperienceInfoComponent } from './view-experience-info.component';

describe('ViewExperienceInfoComponent', () => {
  let component: ViewExperienceInfoComponent;
  let fixture: ComponentFixture<ViewExperienceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExperienceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExperienceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
