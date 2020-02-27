import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog_types:any;
  blog_image:any;
  title:"";
  contents:"";
  blog_category:"";
  blog_type:any;
  imageUrl:any;

  constructor(
    private router: Router,
    private userService: UserService,private blogService:BlogService) { 
      this.fetchCategory();
    }

  ngOnInit() {
  }
fetchCategory()
{
  this.blogService
  .getBlogCategories()
  .subscribe(response => {
    const body = response.json();
    this.blog_types = body.data;
    console.log(this.blog_types);
  });
}


  onAdd()
  {
   
     /* let observableResult=this.service.InsertItem(this.id,this.item_category,this.item_image,this.item_name,this.item_price);
      observableResult.subscribe(response=>{
        console.log("aaaaaa"+response);
        this.router.navigate(["/itemlist"]);
*/

        let observableResult=this.userService.addblog(this.title,this.contents,this.blog_image,this.blog_category,this.blog_type);
        observableResult.subscribe(response=>{
          console.log("aaaaaa"+response);
          this.router.navigate(["/register"]);


      });
  

  }



  onSelectThumbnail(event) {
    this.blog_image = event.target.files[0];
     const reader = new FileReader();
     reader.onload = () => {
       this.imageUrl = reader.result;
     };
     reader.readAsDataURL(this.blog_image);
   }



   onItemChange(event){
  
    this.blog_category=event.target.value;
        console.log(event.target.value+ this.blog_category);
    
    
      }

      onCategoryChange(event){
  
        this.blog_type=event.target.value;
            console.log(this.blog_type);
        
        
          }




}
