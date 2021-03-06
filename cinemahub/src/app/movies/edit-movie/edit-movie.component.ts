import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { movieCreationDTO, movieDTO} from '../../models/movies.model'

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model: movieDTO = {
    title: "Snatch",
    inTheaters: true,
    releaseDate: new Date(),
    summary: 'none given',
    trailer: 'https://www.youtube.com/watch?v=EEsIBYt6tpU',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY268_CR0,0,182,268_AL_.jpg'
  };

  public saveChanges(movieCreationDTO: movieCreationDTO){
    // console.log(event);
  }

}
