import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required, Validators.minLength(3)]
      }]
    });
  }

  saveChanges(){
    this.router.navigate(['/genres']);
  }

  getErrorMessage(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'The name filed is required';
    }

    if(field.hasError('minlength')){
      return 'The name field must contain at least 3 characters'
    }

    return '';
  }

}
