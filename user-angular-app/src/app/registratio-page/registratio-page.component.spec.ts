import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthServiceMock } from '../auth.service.mock';

import { RegistratioPageComponent } from './registratio-page.component';

describe('RegistratioPageComponent', () => {
  let component: RegistratioPageComponent;
  let fixture: ComponentFixture<RegistratioPageComponent>;
  let service: AuthService;
  let paramMapSubscription = new Subscription();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratioPageComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratioPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title text', () => {
    const fixture = TestBed.createComponent(RegistratioPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toEqual('Register User');
  });

  it('should call register method on register button click', () => {
    spyOn(component, 'doRegistration');
    const fixture = TestBed.createComponent(RegistratioPageComponent);
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('#register');
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.doRegistration).toHaveBeenCalled();
    });
  });

});
