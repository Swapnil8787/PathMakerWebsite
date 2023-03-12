import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailComponentComponent } from './contact-detail-component.component';

describe('ContactDetailComponentComponent', () => {
  let component: ContactDetailComponentComponent;
  let fixture: ComponentFixture<ContactDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
