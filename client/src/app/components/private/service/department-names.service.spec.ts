import { TestBed } from '@angular/core/testing';

import { DepartmentNamesService } from './department-names.service';

describe('DepartmentNamesService', () => {
  let service: DepartmentNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
