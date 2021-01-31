import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(()=>{
      this.movies = [
        {
        title: "spider man",
        release: new Date,
        price: 140.99
      },
      {
        title: "hot fuzz",
        release: new Date('2007-09-12'),
        price: 140.99
      }
    ];
    }, 1000);
  }
  movies;
  title = 'cinemahub';

}
