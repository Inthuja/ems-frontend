import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicInfoComponent } from './acadamic-info.component';

describe('AcadamicInfoComponent', () => {
  let component: AcadamicInfoComponent;
  let fixture: ComponentFixture<AcadamicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadamicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
