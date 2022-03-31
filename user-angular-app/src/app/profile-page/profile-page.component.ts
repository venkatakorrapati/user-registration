import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  profileDetails: any;
  subscription: Subscription | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription =  this.authService.getProfileDetails()
      .subscribe((data: any) => {
        this.profileDetails = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
