import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
  isShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isShown = false; //hidden every time subscribe detects change
  }
  
  toggleShow() {
    this.isShown = ! this.isShown;
  }

}
