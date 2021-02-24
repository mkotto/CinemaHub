import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


  form: FormGroup;
  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' }
  ];

  movies = [
    { title: 'Dune', poster: 'https://m.media-amazon.com/images/M/MV5BMGFkZGY0NTgtMGEyZC00YzhjLTkyOWItYzMzOTljMDA3ZjU2XkEyXkFqcGdeQXVyNzc4NTU3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    { title: 'Fifth Element', poster: 'https://m.media-amazon.com/images/M/MV5BZWFjYmZmZGQtYzg4YS00ZGE5LTgwYzAtZmQwZjQ2NDliMGVmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_UY268_CR2,0,182,268_AL_.jpg'},
    { title: 'Hot Fuzz', poster: 'https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    { title: 'Snatch', poster: 'https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY268_CR0,0,182,268_AL_.jpg'}
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: '',
        genreId: 0,
        upComingReleases: false,
        inTheaters: false
      }
    );

    this.form.valueChanges.subscribe(
      values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      }
    );
  }

  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm(){
    this.form.reset();
  }

}
