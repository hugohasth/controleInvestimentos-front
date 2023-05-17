import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { setorResolver } from './setor.resolver';

describe('setorResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => setorResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
