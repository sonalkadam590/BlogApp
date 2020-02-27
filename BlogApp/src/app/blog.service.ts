import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: Http) { }

   url = 'http://localhost:3000/blogs'

   getBlogCategories()
   {
    return this.http.get(this.url+'/cat');
   }

  getBlogs() {
    return this.http.get(this.url);
  }



  getMyBlogs(id) {
    return this.http.get(this.url+ id);
  }

delete(id)
{
  return this.http.delete(this.url+ id);
}


SelectBlogById(id)
{
  return this.http.put(this.url,id);
}
}
