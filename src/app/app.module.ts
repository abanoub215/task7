import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TvComponent } from './tv/tv.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { MatPaginatorModule } from '@angular/material/paginator'; // Import MatPaginatorModule
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    HomeComponent,
    TvComponent,
    AboutComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    TvdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
