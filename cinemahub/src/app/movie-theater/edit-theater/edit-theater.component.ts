import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-theaters',
  templateUrl: './edit-theaters.component.html',
  styleUrls: ['./edit-theaters.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  val;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
        this.val = params.id;
      }
    );
  }

}
