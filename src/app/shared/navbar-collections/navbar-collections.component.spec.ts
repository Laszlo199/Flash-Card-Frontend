import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarCollectionsComponent} from './navbar-collections.component';

describe('NavbarCollectionsComponent', () => {
  let component: NavbarCollectionsComponent;
  let fixture: ComponentFixture<NavbarCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
