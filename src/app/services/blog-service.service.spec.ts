import { TestBed, inject } from '@angular/core/testing';
import { BlogService } from './blog-service.service';

describe('BlogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
