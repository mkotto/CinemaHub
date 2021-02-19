import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './genres/create/create.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './index-genres/index-genres.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: IndexGenresComponent},
  { path: 'genres/create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
