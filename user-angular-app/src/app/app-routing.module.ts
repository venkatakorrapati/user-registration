import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { RegistratioPageComponent } from './registratio-page/registratio-page.component';

const routes: Routes = [
  { path: 'registration', pathMatch: 'full', component: RegistratioPageComponent },
  { path: 'user-profile', pathMatch: 'full', component: ProfilePageComponent, canActivate:[AuthGuard] },
  { path: 'page-not-found', pathMatch: 'full', component: PageNotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'registration' },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
