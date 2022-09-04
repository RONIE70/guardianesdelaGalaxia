import { TestBed } from '@angular/core/testing';

import { AdminAceptaGuard } from './admin-acepta.guard';

describe('AdminAceptaGuard', () => {
  let guard: AdminAceptaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAceptaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
