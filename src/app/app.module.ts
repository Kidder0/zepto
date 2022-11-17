import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NComponent } from './n/n.component';
import { StudentComponent } from './student/student.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ShowempComponent,
    ExpPipe,
    GenderPipe,
    HeaderComponent,
    ProductComponent,
    RegisterComponent,
    NComponent,
    StudentComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
