import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieService {

  url = 'http://localhost:3000/movie';

  constructor(private http: Http) { }

  get() {
    return this.http.get(this.url);
  }

  getDetails(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  post(thumbnail: any, title: string, year: number, rating: number,
       directors: string, stars: string, writers: string,
       shortDescription: string, storyline: string) {

    const formData = new FormData();
    formData.append('thumbnail', thumbnail);
    formData.append('title', title);
    formData.append('year', '' + year);
    formData.append('rating', '' + rating);
    formData.append('directors', directors);
    formData.append('stars', stars);
    formData.append('writers', writers);
    formData.append('shortDescription', shortDescription);
    formData.append('storyline', storyline);

    return this.http.post(this.url, formData);
  }
}
