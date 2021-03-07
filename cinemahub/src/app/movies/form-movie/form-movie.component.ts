import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieCreationDTO, movieDTO } from '../../models/movies.model';
import { multipleSelectorModel } from '../../models/multipleSelectorModel';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: movieDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    { key: 1, value: 'Action' },
    { key: 2, value: 'Drama' },
    { key: 3, value: 'Comedy' }
  ];

  nonSeletedTheaters: multipleSelectorModel[] = [
    { key: 1, value: 'Coliseum' },
    { key: 2, value: 'Sandvika' },
    { key: 3, value: 'Asker' }
  ];

  selectedGenres: multipleSelectorModel[] = [];
  selectedTheaters: multipleSelectorModel[] = [];

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required],
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      release: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: ''
    });

    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() { 
    const genres = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genres);

    const movieTheatersIds = this.selectedTheaters.map(value => value.key);
    this.form.get('movieTheatersIds').setValue(movieTheatersIds);

    this.onSaveChanges.emit(this.form.value);
  }
  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }

}
