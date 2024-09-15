import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerAlertComponent } from './alert.component';

describe('PrimerAlertComponent', () => {
  let component: PrimerAlertComponent;
  let fixture: ComponentFixture<PrimerAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
