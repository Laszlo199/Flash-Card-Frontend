import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCollectionCardComponent } from './public-collection-card.component';

describe('PublicCollectionCardComponent', () => {
  let component: PublicCollectionCardComponent;
  let fixture: ComponentFixture<PublicCollectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCollectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCollectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
