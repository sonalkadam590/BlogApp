import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {
  blogs=[];
  constructor(private service: BlogService, private router:Router) { 
    console.log("Home Component Created");
    //this.getBlogs(id);
  
  }


  getBlogs(id)
  {
    this.service.getBlogs()
    .subscribe(response => {
      const body = response.json();
      this.blogs = body.data;
    });
  }

  ngOnInit() {

   
}
}
