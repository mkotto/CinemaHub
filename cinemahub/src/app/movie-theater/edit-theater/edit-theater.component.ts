import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheaterDTO, movieTheatersCreationDTO } from '../../models/movieTheaterCreationDTO';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  val;
  model: movieTheaterDTO = { name: 'Agora', latitude: 43.32061735446554, longtitude: 45.69574356079102};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.val = params.id;
      }
    );
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){}

}
