import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {
      this.current = [
        {
          title: "spider man",
          release: new Date,
          price: 140.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          title: "hot fuzz",
          release: new Date('2007-09-12'),
          price: 140.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BMzg4MDJhMDMtYmJiMS00ZDZmLThmZWUtYTMwZDM1YTc5MWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
        }
      ];

      this.comingsoon = [
        // {
        //   title: "Gentlemen",
        //   release: new Date('2020-02-15'),
        //   price: 140.99
        // },
        // {
        //   title: "Scott Pilgrim vs The World",
        //   release: new Date('2007-09-12'),
        //   price: 140.99
        // }
      ];
    }, 1000);
  }
  current;
  comingsoon;

  panelOpenState = false;


  handleRating(rate: number) {
    alert(`The user selected ${rate}`);
    console.log(rate);
  }

  onClickDoor(){
    console.log(`haha, it's not working!`);
  }
}
