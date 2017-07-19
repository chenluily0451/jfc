import { TestBed, inject } from '@angular/core/testing';

import { UserSecurityService } from './userSecurity.service';

describe('UserSecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSecurityService]
    });
  });

  it('should be created', inject([UserSecurityService], (service: UserSecurityService) => {
    expect(service).toBeTruthy();
  }));
});
