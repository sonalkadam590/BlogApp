import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie = {};

  // http://localhost:4200/movie-details?id=<id>
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute) {

    activatedRoute.queryParams
      .subscribe(params => {
        const movieId = params['id'];
        console.log(`id: ${movieId}`);
        this.movieService
          .getDetails(movieId)
          .subscribe(response => {
              const body = response.json();
              if (body['status'] == 'success') {
                this.movie = body.data;
              }
          });
      });
  }

  ngOnInit() {
  }

}
