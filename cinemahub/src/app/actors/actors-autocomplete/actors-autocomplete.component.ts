import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();
  actors = [
    { name: 'Simon Peg', picture: 'https://m.media-amazon.com/images/M/MV5BNzMwODE1NjA3OV5BMl5BanBnXkFtZTgwNTY5MzM2OTE@._V1_UX214_CR0,0,214,317_AL_.jpg' },
    { name: 'Edward Norton', picture: 'https://m.media-amazon.com/images/M/MV5BMTYwNjQ5MTI1NF5BMl5BanBnXkFtZTcwMzU5MTI2Mw@@._V1_UY317_CR16,0,214,317_AL_.jpg' },
    { name: 'Benicio Del Toro', picture: 'https://m.media-amazon.com/images/M/MV5BMTkzODQ4NzU1N15BMl5BanBnXkFtZTcwOTUzMzc5Mg@@._V1_UY317_CR10,0,214,317_AL_.jpg' }
  ];

  originalActors = this.actors;
  selectedActors = [];

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
  }
}
