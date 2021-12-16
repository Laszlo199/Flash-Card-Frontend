import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SwitchingModesComponent} from './switching-modes.component';

describe('SwitchingModesComponent', () => {
  let component: SwitchingModesComponent;
  let fixture: ComponentFixture<SwitchingModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchingModesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
