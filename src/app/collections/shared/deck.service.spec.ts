import { TestBed } from '@angular/core/testing';

import { Deck.ServiceService } from './deck.service.service';

describe('Deck.ServiceService', () => {
  let service: Deck.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deck.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
