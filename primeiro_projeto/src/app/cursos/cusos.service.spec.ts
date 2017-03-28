import { TestBed, inject } from '@angular/core/testing';

import { CusosService } from './cusos.service';

describe('CusosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CusosService]
    });
  });

  it('should ...', inject([CusosService], (service: CusosService) => {
    expect(service).toBeTruthy();
  }));
});
