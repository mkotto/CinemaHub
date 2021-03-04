import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from '../../models/movieTheaterCreationDTO';
import { coordinates } from '../../utilities/map/coordinate';

@Component({
  selector: 'app-theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css']
})
export class TheaterFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;
  @Input()
  model: movieTheatersCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        { validators: [Validators.required] }
      ],
      longtitude: [
        '',
        {validators: [Validators.required]}
      ],
      latitude: [
        '',
        {validators: [Validators.required]}
      ]
    });

    // if (this.model.name != undefined) {
    //   this.form.patchValue(this.model);
    // }
  }

  onSelectedLocation(coordinates: coordinates){
    this.form.patchValue(coordinates);
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

}
