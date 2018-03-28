import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClientModule) { }

  getUserDetails(userName, password) {
    //post these details to http server return userinfo
    return this.http.post('/api/auth.php',
      {
        userName,
        password
      }).subscribe(data => {
        console.log(data, 'is what we got from the server')
      })
  }

}
