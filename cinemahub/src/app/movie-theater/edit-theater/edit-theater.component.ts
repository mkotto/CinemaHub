import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO } from '../../models/movieTheaterCreationDTO';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  val;
  model: movieTheatersCreationDTO = { name: 'Agora'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.val = params.id;
      }
    );
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){}

}
