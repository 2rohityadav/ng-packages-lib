import { TestBed } from '@angular/core/testing';

import { FormatCodeService } from './format-code.service';

describe('FormatCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatCodeService = TestBed.get(FormatCodeService);
    expect(service).toBeTruthy();
  });
});
