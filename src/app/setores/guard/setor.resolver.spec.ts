import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { setorResolver } from './setor.resolver';
import { Setor } from '../model/setor';

describe('setorResolver', () => {
  const executeResolver: ResolveFn<Setor> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => setorResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
