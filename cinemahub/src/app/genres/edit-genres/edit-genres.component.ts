import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  temp;

  model: genreCreationDTO = {name: 'Drama'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.temp = params.id;
      }
    );
  }

  onSaveChanges(){

  }

}
