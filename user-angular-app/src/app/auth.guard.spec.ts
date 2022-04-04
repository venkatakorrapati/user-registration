import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthServiceMock } from './auth.service.mock';
import { RegistratioPageComponent } from './registratio-page/registratio-page.component';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([
        { path: 'registration', pathMatch: 'full', component: RegistratioPageComponent }
      ])],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  beforeEach(() => {
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should redirect to authenticated route when user is registered', () => {
      const spy = spyOn(authService, 'getIsRegistered').and.returnValue(true);
      expect(guard.canActivate()).toBe(true);
      expect(spy).toHaveBeenCalled();
  });

  it('should redirect to registration page when the user is not registered', () => {
    const spy = spyOn(authService, 'getIsRegistered').and.returnValue(false);
    expect(guard.canActivate()).toBe(false);
    expect(spy).toHaveBeenCalled();
  });

});
