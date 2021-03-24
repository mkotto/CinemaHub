import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from '../../validators/firstletter';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router: Router, private service: GenresService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    this.service.create(genreCreationDTO).subscribe( () => {
      this.router.navigate(['/genres']);
    }, error => console.log(error));
  }



}
