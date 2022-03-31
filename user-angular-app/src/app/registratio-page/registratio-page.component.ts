import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registratio-page',
  templateUrl: './registratio-page.component.html',
  styleUrls: ['./registratio-page.component.scss']
})
export class RegistratioPageComponent implements OnInit {

  registrationForm: any; 
  userSubscription: Subscription | undefined;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      emailAddress: ['', Validators.required],
      password: ['', Validators.required],
      bio: ['', Validators.required]
    });
  }

  doRegistration(): void {
    this.userSubscription = this.authService.postRegistratiion()
    .subscribe((data:any) => {
      this.authService.setIsRegistered(data.success);
      if (data.success) {
        this.router.navigateByUrl('/user-profile');
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();    
  }


}
