import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isShown: boolean = false;
  newColor: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isShown = false; //hidden every time subscribe detects change
    this.newColor = false;
  }
  
  toggleShow() {
    this.isShown = ! this.isShown;
    this.newColor = !this.newColor;

  }


}
