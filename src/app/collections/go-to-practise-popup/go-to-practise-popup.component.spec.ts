import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToPractisePopupComponent } from './go-to-practise-popup.component';

describe('GoToPractisePopupComponent', () => {
  let component: GoToPractisePopupComponent;
  let fixture: ComponentFixture<GoToPractisePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToPractisePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToPractisePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
