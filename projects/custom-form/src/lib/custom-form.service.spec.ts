import { TestBed } from '@angular/core/testing';

import { CustomFormService } from './custom-form.service';

describe('CustomFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomFormService = TestBed.get(CustomFormService);
    expect(service).toBeTruthy();
  });
});
