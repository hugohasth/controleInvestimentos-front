import { TestBed } from '@angular/core/testing';
import { UntypedFormControl, Validators } from '@angular/forms';

import { FormUtilsService } from './form-utils.service';

describe('FormUtilsService', () => {
  let service: FormUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getErrorMessageFromField', () => {
    it('should return "Campo obrigatório" for required fields', () => {
      const control = new UntypedFormControl('', Validators.required);
      expect(service.getErrorMessageFromField(control)).toBe('Campo obrigatório');
    });

    it('should return "Somente números" for pattern validation errors', () => {
      const control = new UntypedFormControl('abc', Validators.pattern(/^\d+$/));
      expect(service.getErrorMessageFromField(control)).toBe('Somente números');
    });
  });
});
