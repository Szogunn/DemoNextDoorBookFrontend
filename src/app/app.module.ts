import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { BookInformationComponent } from './book-information/book-information.component';
import { ProfileComponent } from './profile/profile.component';
import { RentalHistoryComponent } from './rental-history/rental-history.component';
import { ExchangeRequestComponent } from './exchange-request/exchange-request.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SideNavComponent,
    AddBookComponent,
    ShowBooksComponent,
    BookInformationComponent,
    ProfileComponent,
    RentalHistoryComponent,
    ExchangeRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
