import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatepanComponent } from './calculatepan.component';

describe('CalculatepanComponent', () => {
  let component: CalculatepanComponent;
  let fixture: ComponentFixture<CalculatepanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatepanComponent]
    });
    fixture = TestBed.createComponent(CalculatepanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
