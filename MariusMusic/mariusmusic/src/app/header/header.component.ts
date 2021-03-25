import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  template: 
            `<div class="mat-display-4">
                  {{ getTitle() }}
            </div>
            `,

  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Marius Music Server";

  getTitle() {
    return this.title;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
