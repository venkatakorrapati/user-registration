import { of } from "rxjs";

export class AuthServiceMock {
    postRegistratiion() {
        return of({
          success: true
        });
    }

    getProfileDetails() {
      return of({
          "name":"King Julien",
          "email":"kingj@email.com",
          "bio":"Hi my name is King Julien and I like to move it move it.",
          "img":"https://tinyurl.com/2p9953zy"
      });
    }

    getIsRegistered() {
        return of(true);
    }

    setIsRegistered(flag: boolean) {
      return of(flag);
    }
  }