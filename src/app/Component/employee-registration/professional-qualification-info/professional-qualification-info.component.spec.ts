import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalQualificationInfoComponent } from './professional-qualification-info.component';

describe('ProfessionalQualificationInfoComponent', () => {
  let component: ProfessionalQualificationInfoComponent;
  let fixture: ComponentFixture<ProfessionalQualificationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalQualificationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalQualificationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
