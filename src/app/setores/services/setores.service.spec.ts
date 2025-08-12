import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SetoresService } from './setores.service';

describe('SetoresService', () => {
  let service: SetoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SetoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
