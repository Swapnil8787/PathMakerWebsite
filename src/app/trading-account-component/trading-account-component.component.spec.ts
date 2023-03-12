import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingAccountComponentComponent } from './trading-account-component.component';

describe('TradingAccountComponentComponent', () => {
  let component: TradingAccountComponentComponent;
  let fixture: ComponentFixture<TradingAccountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingAccountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradingAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
