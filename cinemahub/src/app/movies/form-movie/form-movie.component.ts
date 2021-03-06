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

  selectedGenres: multipleSelectorModel[] = [];

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
      genresIds: ''
    });

    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() { 
    const genres = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genres);
    this.onSaveChanges.emit(this.form.value);
  }
  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }

}
