import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfessionalInfoComponent } from './view-professional-info.component';

describe('ViewProfessionalInfoComponent', () => {
  let component: ViewProfessionalInfoComponent;
  let fixture: ComponentFixture<ViewProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfessionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfessionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
