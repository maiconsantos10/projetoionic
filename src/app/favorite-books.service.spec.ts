import { TestBed } from '@angular/core/testing';

import { FavoriteBooksService } from './favorite-books.service';

describe('FavoriteBooksService', () => {
  let service: FavoriteBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
