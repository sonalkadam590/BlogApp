import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  isGrid = true;
  movies = [];

  constructor(
    private router: Router,
    private movieService: MovieService) {

    this.loadMovies();
  }

  onSelectMovie(movie) {
    // /movie-details?id=<movie.id>
    this.router.navigate(['/movie-details'], { queryParams: { id: movie.id } });
  }

  showGrid() {
    this.isGrid = true;
  }

  toggleGrid() {
    this.isGrid = !this.isGrid;
  }

  showList() {
    this.isGrid = false;
  }

  onDelete(movie) {
    const result = confirm('Are you sure you want to remove this movie?');
    if (result) {
      this.movieService
        .delete(movie.id)
        .subscribe(response => {
          const body = response.json();
          if (body['status'] == 'success') {
            this.loadMovies();
          }
        })
    }
  }

  loadMovies() {
    this.movieService
      .get()
      .subscribe(response => {
        const body = response.json();
        this.movies = body.data;
      });
  }

  ngOnInit() {
  }

}
