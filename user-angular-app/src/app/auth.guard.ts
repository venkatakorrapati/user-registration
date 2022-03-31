import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
      if (!this.authService.getIsRegistered()) {
        this.router.navigateByUrl('/registration');
        return false;
      }
      return true;
  } 
}
