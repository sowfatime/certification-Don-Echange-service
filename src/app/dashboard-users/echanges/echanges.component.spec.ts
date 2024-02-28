import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangesComponent } from './echanges.component';

describe('EchangesComponent', () => {
  let component: EchangesComponent;
  let fixture: ComponentFixture<EchangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EchangesComponent]
    });
    fixture = TestBed.createComponent(EchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
