import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable(    )
export class UserService implements CanActivate {

  url = 'http://localhost:3000/user';

  constructor(
    private router: Router,
    private http: Http) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // check if user has logged in
    if (sessionStorage['login_status'] == '1') {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  signup(fullName: string,  email: string, password: string,phone_no:string, address:string) {
    const body = {
      fullName: fullName,
      email: email,
      password: password,
      phone_no:phone_no,
      address:address
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this.url + '/register', body,requestOptions);
  }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this.url + '/login', body,requestOptions);
  }

addblog( title:string, contents: string, blog_image:any, blog_category:string ,blog_type:any)
{
  console.log("inside addlog")
  const formData = new FormData();
   // console.log(blog_image);
   // formData.append('id',''+id );
    formData.append('title',title);
    formData.append('contents', contents);
    formData.append('blog_image', blog_image);

    formData.append('blog_category', '' + blog_category);
    formData.append('blog_type',blog_type);
    return this.http.post("http://localhost:3000/user/addblog",formData);

}




}
