import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailComponentComponent } from './service-detail-component.component';

describe('ServiceDetailComponentComponent', () => {
  let component: ServiceDetailComponentComponent;
  let fixture: ComponentFixture<ServiceDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
