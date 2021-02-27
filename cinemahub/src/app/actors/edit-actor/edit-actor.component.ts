import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../../models/actorDTO';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  tempval;

  model: actorDTO = { name: 'Brad Pit', dateOfBirth: new Date(), picture: 'https://m.media-amazon.com/images/M/MV5BMTE5Mjk5OTMxMV5BMl5BanBnXkFtZTYwODMyNDE0._V1_UY317_CR8,0,214,317_AL_.jpg'};

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);
      this.tempval = params.id;
    });
  }

  saveChanges(actor: actorDTO){
    console.log(actor);
  }

}
