import { TestBed } from '@angular/core/testing';

import { FlashcardsLearningModeService } from './flashcards-learning-mode.service';

describe('FlashcardsLearningModeService', () => {
  let service: FlashcardsLearningModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashcardsLearningModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
