import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { AuthServiceMock } from '../auth.service.mock';

import { ProfilePageComponent } from './profile-page.component';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageComponent ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProfileDetails() on component init method', () => {
    const spy = spyOn(service, 'getProfileDetails').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call getProfileDetails() on on init and render profile information', async () => {
    const spy = spyOn(service, 'getProfileDetails').and.callThrough();
    component.ngOnInit();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component.profileDetails).toEqual({
      name: 'King Julien',
      email: 'kingj@email.com',
      bio: 'Hi my name is King Julien and I like to move it move it.',
      img: 'https://tinyurl.com/2p9953zy'
    });
    expect(compiled.querySelector('.name')?.textContent).toEqual('King Julien');
    expect(compiled.querySelector('p')?.textContent).toEqual('kingj@email.com');
    expect(compiled.querySelectorAll('p')[1].textContent).toEqual('Hi my name is King Julien and I like to move it move it.');
  });
});
