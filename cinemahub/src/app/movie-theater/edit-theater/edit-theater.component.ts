import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  val;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.val = params.id;
      }
    );
  }

}
