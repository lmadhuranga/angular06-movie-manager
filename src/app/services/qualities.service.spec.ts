import { TestBed } from '@angular/core/testing';

import { QualitiesService } from './qualities.service';

describe('QualitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualitiesService = TestBed.get(QualitiesService);
    expect(service).toBeTruthy();
  });
});
