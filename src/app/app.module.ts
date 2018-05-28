import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { InstructorExampleComponent } from './instructor-example/instructor-example.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { PanelComponent } from './components/panel/panel.component';
import { LikeComponent } from './components/like/like.component';
import { DirectiveCoursesComponent } from './components/directive-courses/directive-courses.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { TopicsComponent } from './components/topics/topics.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GitHubProfileComponent } from './components/git-hub-profile/git-hub-profile.component';
import { DefaultPageComponent } from './components/default-page/default-page-component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    InstructorExampleComponent,
    TitleCasePipe,
    PanelComponent,
    LikeComponent,
    DirectiveCoursesComponent,
    NavigationBarComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    SignupFormComponent,
    TopicsComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    GitHubProfileComponent,
    NavbarComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'others',
        component: NavigationBarComponent
      },
      {
        path: 'follower/:id/:login',
        component: GitHubProfileComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '**',
        component: DefaultPageComponent
      }
    ])
  ],
  providers: [
    PostService,
    CoursesService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
