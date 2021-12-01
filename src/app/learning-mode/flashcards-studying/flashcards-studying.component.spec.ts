import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsStudyingComponent } from './flashcards-studying.component';

describe('FlashcardsStudyingComponent', () => {
  let component: FlashcardsStudyingComponent;
  let fixture: ComponentFixture<FlashcardsStudyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardsStudyingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardsStudyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
