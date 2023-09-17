import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  allMovies: any[] = [];
  allData: any[] = [];
  lang: string = 'en-US';
  //late
  totalmovies!: number;
  moviesPerPage: number = 20;

  private searchval: string = '';
  showMoviesDetails: boolean = true;

  currentPage: number = 1;

  constructor(private movieService: MoviesService) {}

  set searchValue(value: string) {
    this.searchval = value;
    this.searchallMovies(value);
  }

  ngOnInit(): void {
    //next,error,complete
    this.movieService.getAllMovies(this.currentPage, this.lang).subscribe({
      next: (response) => {
        console.log(response);
        this.allMovies = response.results;
        this.allData = this.allMovies;
        this.totalmovies = response.total_results;
      },
    });
  }

  toggleDetails(movieId: number) {
    console.log(movieId);

    for (const item of this.allMovies) {
      if (item.id == movieId) {
        item.toggleDiscription = !item.toggleDiscription;
      }
    }
  }

  searchallMovies(movieTitle: string) {
    this.movieService.searchAllMovie(movieTitle).subscribe({
      next: (response) => {
        this.allMovies = response.results;
        this.allData = this.allMovies;
      },
    });
  }

  changeLanguage() {
    this.lang = this.lang == 'en-Us' ? 'ar-SA' : 'en-Us';
    this.movieService.getAllMovies(this.currentPage, this.lang).subscribe({
      next: (response) => {
        this.allMovies = response.results;
        this.allData = this.allMovies;
      },
    });
  }

  changePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.movieService.getAllMovies(this.currentPage, this.lang).subscribe({
      next: (response) => {
        this.allMovies = response.results;
        this.allData = this.allMovies;
      },
    });
    
  }
}
