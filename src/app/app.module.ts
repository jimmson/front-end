import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';

import { UserService } from './services/user.service';
import { MemeService } from './services/meme.service';
import { AuthGuard } from './services/auth.guard';

import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MemeAddComponent } from './meme-add/meme-add.component';
import { MemeDetailComponent } from './meme-detail/meme-detail.component';

import { CeiboShare } from 'ng2-social-share';

@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    LoginComponent,
    RegisterComponent,
    MemeAddComponent,
    MemeDetailComponent,
    CeiboShare
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    MemeService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
