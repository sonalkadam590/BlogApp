import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieService } from './movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';

import { AddBlogComponent } from './add-blog/add-blog.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyblogComponent } from './myblog/myblog.component';
import { HomeComponent } from './home/home.component';
import { BlogService } from './blog.service';
import { EditblogComponent } from './editblog/editblog.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
  
  
    LoginComponent,
    RegisterComponent,
    AddBlogComponent,
    DisplayblogComponent,
    MyblogComponent,
    HomeComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     /* { path: 'movie-add', component: AddMovieComponent,},
      { path: 'movie-list', component: MovieListComponent },
      { path: 'movie-details', component: MovieDetailsComponent },
    
   */
      { path: 'login', component: LoginComponent },
      { path: 'add-blog', component: AddBlogComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'edit/:id', component: EditblogComponent },
      { path: 'home', component: HomeComponent},
      { path: 'displayblog', component: DisplayblogComponent},
      { path: 'movie-list', component: MovieListComponent },
      { path: '**', component: HomeComponent}
    ])
  ],
  providers: [
    MovieService,
    UserService,
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
