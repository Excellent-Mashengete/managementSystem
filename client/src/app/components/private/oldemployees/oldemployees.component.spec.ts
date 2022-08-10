import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldemployeesComponent } from './oldemployees.component';

describe('OldemployeesComponent', () => {
  let component: OldemployeesComponent;
  let fixture: ComponentFixture<OldemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldemployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
