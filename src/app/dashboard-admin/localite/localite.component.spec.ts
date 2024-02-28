import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaliteComponent } from './localite.component';

describe('LocaliteComponent', () => {
  let component: LocaliteComponent;
  let fixture: ComponentFixture<LocaliteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocaliteComponent]
    });
    fixture = TestBed.createComponent(LocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
