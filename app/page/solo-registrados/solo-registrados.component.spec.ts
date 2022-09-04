import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloRegistradosComponent } from './solo-registrados.component';

describe('SoloRegistradosComponent', () => {
  let component: SoloRegistradosComponent;
  let fixture: ComponentFixture<SoloRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloRegistradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
