import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserComponent } from './Components/user/user.component';
import { UserAuthModule } from './Components/user-auth/user-auth.module';
import { HeaderComponent } from './Components/header/header.component';
import { TestComponent } from './Components/test/test.component';
import { TodoComponent } from './Components/todo/todo.component';
import { SendToParentComponent } from './Components/send-to-parent/send-to-parent.component';
import { NgToastModule,NgToastComponent} from 'ng-angular-popup';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { FormExampleComponent } from './Components/form-example/form-example.component';
import { HighLightDirective } from './directive/high-light.directive';
import { TodoViewComponent } from './Components/todo-view/todo-view.component';
import { LoginComponent } from './Components/user-auth/login/login.component';
import { SignUpComponent } from './Components/user-auth/sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TestcComponent } from './Components/testc/testc.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { RegisterComponent } from './Components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    HeaderComponent,
    RegisterComponent,
    TestComponent,
    TodoComponent,
    ProductlistComponent,
    SendToParentComponent,
    UsdToInrPipe,
    FormExampleComponent,
    HighLightDirective,
    TestcComponent,
    TodoViewComponent,
    TruncatePipe
  ],
  imports: [
    NgToastModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
