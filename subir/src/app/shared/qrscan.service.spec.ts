import { TestBed } from '@angular/core/testing';

import { QrscanService } from './qrscan.service';

describe('QrscanService', () => {
  let service: QrscanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrscanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
