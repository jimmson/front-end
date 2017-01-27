import { AuthGuard } from './services/auth.guard';

import { MemesComponent } from './memes/memes.component';
import { MemeAddComponent } from './meme-add/meme-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes = [
  { path: '', component: MemesComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'meme-add', component: MemeAddComponent, canActivate: [AuthGuard] }
];
