import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  blog= {"title":"", "contents":""};
  constructor(private route: ActivatedRoute, 
    private service: BlogService,
    private router: Router) 
    {

    }

  ngOnInit() {


    this.route.paramMap.subscribe((result)=>{
      let id= result.get("id");
      console.log(id);
 
      let observableResult = 
              this.service.SelectBlogById(id);
 
       observableResult.subscribe((recordsFound)=>{
         console.log(recordsFound[0]);
         this.blog =  recordsFound[0];
       });
       
    }); 
  }

}
