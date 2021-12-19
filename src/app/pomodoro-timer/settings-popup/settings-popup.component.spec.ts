import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPopupComponent } from './settings-popup.component';

describe('SettingsPopupComponent', () => {
  let component: SettingsPopupComponent;
  let fixture: ComponentFixture<SettingsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
