import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  title = '';
  year = 0;
  directors = '';
  writers = '';
  stars = '';
  rating = 0;
  shortDescription = '';
  storyline = '';
  thumbnail: any;
  imageUrl: any;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  onSelectThumbnail(event) {
    this.thumbnail = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(this.thumbnail);
  }

  onAdd() {
    this.movieService
      .post(this.thumbnail, this.title, this.year, this.rating,
            this.directors, this.stars, this.writers,
            this.shortDescription, this.storyline)
      .subscribe(response => {
        console.log(response);
        const body  = response.json();
        if (body['status'] == 'success') {
          this.title = '';
          this.year = 0;
          this.directors = '';
          this.writers = '';
          this.stars = '';
          this.rating = 0;
          this.shortDescription = '';
          this.storyline = '';
          this.thumbnail = undefined;
          this.imageUrl = undefined;
        } else {
          alert(body['error']);
        }
      });
  }

  onCancel() {

  }

}
