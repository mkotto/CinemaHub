import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from '../../validators/firstletter';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase]
      }]
    });
  }

  saveChanges(){
    // this.router.navigate(['/genres']);
  }

  getErrorMessage(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'The name filed is required';
    }

    if(field.hasError('minlength')){
      return 'The name field must contain at least 3 characters'
    }

    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }

}
