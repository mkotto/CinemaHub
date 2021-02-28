import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../../models/movieTheaterCreationDTO';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){
    
  }

}
