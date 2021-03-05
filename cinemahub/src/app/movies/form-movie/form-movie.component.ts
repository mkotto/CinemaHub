import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieDTO } from '../../models/movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: movieDTO;

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
      poster: ''
    });

    if(this.model != undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){}
  onImageSelected(file: File){
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string){
    this.form.get('summary').setValue(content);
  }

}
