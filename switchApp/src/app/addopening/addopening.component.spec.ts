import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddopeningComponent } from './addopening.component';

describe('AddopeningComponent', () => {
  let component: AddopeningComponent;
  let fixture: ComponentFixture<AddopeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddopeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
