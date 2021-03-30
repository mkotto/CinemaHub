import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreationDTO, genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private genreService: GenresService, private router: Router) { }

  model: genreDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.genreService.getById(params.id).subscribe(
          genre => {this.model = genre;}
        );
      }
    );
  }

  saveChanges(genreCreationDTO?: genreCreationDTO){
    this.genreService.edit(this.model.id, genreCreationDTO).subscribe(
      () => {
        this.router.navigate(["/genres"]);
      }
    );
  }

}
