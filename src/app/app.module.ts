import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { TodoComponent } from './todo/todo.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SendToParentComponent } from './send-to-parent/send-to-parent.component';
import { NgToastModule,NgToastComponent} from 'ng-angular-popup';
import { UsdToInrPipe } from './pipes/usd-to-inr.pipe';
import { FormExampleComponent } from './form-example/form-example.component';
import { HighLightDirective } from './directive/high-light.directive';
import { TestcComponent } from './testc/testc.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AuthService } from './services/authservice';


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
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
