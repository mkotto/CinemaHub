import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  constructor(private genresService: GenresService) { }

  genres: genreDTO[];
  columnsToDisplay = ['name', 'action'];

  ngOnInit(): void {

    this.loadGenres();
  }

  loadGenres(){
    const genres = this.genresService.getAll().subscribe( genres => {
      this.genres = genres;

      console.log(this.genres);
    });
  }

  delete(id: number){
    this.genresService.delete(id).subscribe(() => {
      this.loadGenres();
    });
  }

}
