import {inject, TestBed} from '@angular/core/testing';

import {UserProfile} from './user-profile.service';

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
