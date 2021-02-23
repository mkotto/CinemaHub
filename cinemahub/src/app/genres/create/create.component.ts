import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from '../../validators/firstletter';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);
  }



}
