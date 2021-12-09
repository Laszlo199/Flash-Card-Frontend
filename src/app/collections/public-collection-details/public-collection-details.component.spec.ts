import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCollectionDetailsComponent } from './public-collection-details.component';

describe('PublicCollectionDetailsComponent', () => {
  let component: PublicCollectionDetailsComponent;
  let fixture: ComponentFixture<PublicCollectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCollectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
