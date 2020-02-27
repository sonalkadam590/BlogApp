import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayblog',
  templateUrl: './displayblog.component.html',
  styleUrls: ['./displayblog.component.css']
})
export class DisplayblogComponent implements OnInit {
blogs=[];
  constructor(private service: BlogService, private router:Router) { 
    console.log("Home Component Created");
    this.getBlogs();
  
  }


  getBlogs()
  {
    this.service.getBlogs()
    .subscribe(response => {
      const body = response.json();
      this.blogs = body.data;
    });
  }
onEdit()
{

}
onDelete(movie) {
  const result = confirm('Are you sure you want to remove this movie?');
  if (result) {
    this.service
      .delete(movie.id)
      .subscribe(response => {
        const body = response.json();
        if (body['status'] == 'success') {
          //this.loadMovies();
        }
      })
  }
}

  ngOnInit() {

   
}


}


















