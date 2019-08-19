import { TestBed } from '@angular/core/testing';

import { TilesService } from './tiles.service';

describe('TilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TilesService = TestBed.get(TilesService);
    expect(service).toBeTruthy();
  });
});
