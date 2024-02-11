import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ShowBooksComponent } from './show-books/show-books.component';
import { BookInformationComponent } from './book-information/book-information.component';
import { ProfileComponent } from './profile/profile.component';
import { RentalHistoryComponent } from './rental-history/rental-history.component';
import { ExchangeRequestComponent } from './exchange-request/exchange-request.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookshelf/add', component: AddBookComponent },
  { path: 'bookshelf/show', component: ShowBooksComponent },
  { path: 'book/:id', component: BookInformationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'exchange/hisotry', component: RentalHistoryComponent },
  { path: 'exchange/request', component: ExchangeRequestComponent },
  { path: 'user/:id', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
