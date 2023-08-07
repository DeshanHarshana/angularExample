import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColletionComponent } from './colletion.component';

describe('ColletionComponent', () => {
  let component: ColletionComponent;
  let fixture: ComponentFixture<ColletionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColletionComponent]
    });
    fixture = TestBed.createComponent(ColletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
