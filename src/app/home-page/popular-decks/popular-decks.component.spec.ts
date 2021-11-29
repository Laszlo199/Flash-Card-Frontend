import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDecksComponent } from './popular-decks.component';

describe('PopularDecksComponent', () => {
  let component: PopularDecksComponent;
  let fixture: ComponentFixture<PopularDecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
