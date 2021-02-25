import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO } from '../../models/actorDTO';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  tempval;

  model: actorCreationDTO = { name: 'Brad Pit', dateOfBirth: new Date()};

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);
      this.tempval = params.id;
    });
  }

  saveChanges(actor: actorCreationDTO){
    console.log(actor);
  }

}
