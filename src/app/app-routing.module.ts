import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { TestcComponent } from './testc/testc.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { LoginComponent } from './user-auth/login/login.component';
import { SignUpComponent } from './user-auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'Login',component:LoginComponent
  },
  {
    path:'Sign-up',component:SignUpComponent
  },
  {
    path:'ToDo',component:TodoComponent
  },
  {
    path:'Sample',component:TestcComponent
  },
  {
    path:'ToDoView/:item',component:TodoViewComponent
  },
  {
    path:'',component:TodoComponent
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
