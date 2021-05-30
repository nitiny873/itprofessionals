import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningdetailsComponent } from './openingdetails.component';

describe('OpeningdetailsComponent', () => {
  let component: OpeningdetailsComponent;
  let fixture: ComponentFixture<OpeningdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
