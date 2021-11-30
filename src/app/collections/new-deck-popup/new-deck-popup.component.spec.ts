import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeckPopupComponent } from './new-deck-popup.component';

describe('NewDeckPopupComponent', () => {
  let component: NewDeckPopupComponent;
  let fixture: ComponentFixture<NewDeckPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeckPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeckPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
