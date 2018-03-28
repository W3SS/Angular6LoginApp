import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(event)
  {
      const target = event.target;

      let userName = target.querySelector('#username').value;
      let password = target.querySelector('#password').value;
      console.log(userName);
      console.log(password);
      event.preventDefault();
  }

}
