import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBasicInfoComponent } from './view-basic-info.component';

describe('ViewBasicInfoComponent', () => {
  let component: ViewBasicInfoComponent;
  let fixture: ComponentFixture<ViewBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
