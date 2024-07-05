import { RegisterComponent } from './Components/register/register.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TestcComponent } from './Components/testc/testc.component';
import { TodoViewComponent } from './Components/todo-view/todo-view.component';
import { LoginComponent } from './Components/user-auth/login/login.component';
import { SignUpComponent } from './Components/user-auth/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Sign-up',component:SignUpComponent
  },
  {
    path:'ToDo',component:TodoComponent, canActivate: [authGuard]
  },
  {
    path:'Sample',component:TestcComponent
  },
  {
    path:'ToDoView/:item',component:TodoViewComponent, canActivate: [authGuard]
  },
  { 
    path: '', redirectTo: '/Login', pathMatch: 'full' 

  },
  {
    path:'**',component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
