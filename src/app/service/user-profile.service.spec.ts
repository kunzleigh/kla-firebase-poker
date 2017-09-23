import { TestBed, inject } from '@angular/core/testing';

import { UserProfile.ServiceService } from './user-profile.service.service';

describe('UserProfile.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfile.ServiceService]
    });
  });

  it('should be created', inject([UserProfile.ServiceService], (service: UserProfile.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
