import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateComponent } from './genres/create/create.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './index-genres/index-genres.component';
import { CreateTheaterComponent } from './movie-theater/create-theater/create-theater.component';
import { IndexTheaterComponent } from './movie-theater/index-theater/index-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { EditTheaterComponent } from './movie-theater/edit-theater/edit-theater.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'genres', component: IndexGenresComponent},
  { path: 'genres/create', component: CreateComponent },
  { path: 'genres/edit/:id', component: EditGenresComponent },


  { path: 'actors', component: IndexActorsComponent},
  { path: 'actors/create', component: CreateActorComponent },
  { path: 'actors/edit/:id', component: EditActorComponent },

  { path: 'theaters', component: IndexTheaterComponent},
  { path: 'theaters/create', component: CreateTheaterComponent },
  { path: 'theaters/edit/:id', component: EditTheaterComponent },
  
  // { path: 'movies', component: MoviesListComponent},
  { path: 'movies/create', component: CreateMovieComponent },
  { path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
