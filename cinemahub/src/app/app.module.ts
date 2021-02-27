import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MenuComponent } from './menu/menu.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { RatingComponent } from './utilities/rating/rating.component';
import { HomeComponent } from './home/home.component';

import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';

import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { CreateComponent } from './genres/create/create.component';
import { IndexGenresComponent } from './index-genres/index-genres.component';

import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';

import { IndexTheaterComponent } from './movie-theater/index-theater/index-theater.component';
import { CreateTheaterComponent } from './movie-theater/create-theater/create-theater.component';
import { EditTheaterComponent } from './movie-theater/edit-theater/edit-theater.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateComponent,
    IndexActorsComponent,
    CreateActorComponent,
    IndexTheaterComponent,
    CreateTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenresComponent,
    EditMovieComponent,
    EditTheaterComponent,
    FormGenreComponent,
    MovieFilterComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
