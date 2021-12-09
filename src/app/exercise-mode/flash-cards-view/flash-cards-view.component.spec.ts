import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardsViewComponent } from './flash-cards-view.component';

describe('FlashCardsViewComponent', () => {
  let component: FlashCardsViewComponent;
  let fixture: ComponentFixture<FlashCardsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashCardsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashCardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
