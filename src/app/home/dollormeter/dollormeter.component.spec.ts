import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollormeterComponent } from './dollormeter.component';

describe('DollormeterComponent', () => {
  let component: DollormeterComponent;
  let fixture: ComponentFixture<DollormeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DollormeterComponent]
    });
    fixture = TestBed.createComponent(DollormeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
