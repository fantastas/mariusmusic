import { ArtistsService } from './../artists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  
  artists: any;  
  title = "All Artists";

  getTitle() {
    return this.title;
  }
  constructor(service: ArtistsService) { 
    this.artists = service.getArtists();
  }
  
  ngOnInit(): void {
  }

}
