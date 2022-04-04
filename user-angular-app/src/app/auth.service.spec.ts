import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const response =  {
    "name":"King Julien",
    "email":"kingj@email.com",
    "bio":"Hi my name is King Julien and I like to move it move it.",
    "img":"https://tinyurl.com/2p9953zy"
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should verify the HTTP call and return data mock data on getProfileDetails call', () => {
    service.getProfileDetails().subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpMock.expectOne('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
    expect(req.request.method).toBe('GET');
    req.flush(response);
  });

  it('should verify the HTTP call and return mock data on postRegistratiion call', () => {
    const mockResponse = {success: true}
    service.postRegistratiion().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
