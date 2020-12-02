import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowBookingHistoryComponent } from './BookingModule/show-booking-history/show-booking-history.component';
import { ShowBookingHistoryForLoggedInUserComponent } from './BookingModule/show-booking-history-for-logged-in-user/show-booking-history-for-logged-in-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFlightComponent } from './BookingModule/search-flight/search-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingPipePipe } from './booking-pipe.pipe';
import { BookingPipe1Pipe } from './booking-pipe1.pipe';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MyFeedbackComponent } from './components/my-feedback/my-feedback.component';
import { EditFeedbackComponent } from './components/edit-feedback/edit-feedback.component';
import { GetFeedbacksComponent } from './components/get-feedbacks/get-feedbacks.component';
import { FeedbackSearchPipe } from './feedback-search.pipe.1';
import { RefundPoliciesComponent } from './components/refund-policies/refund-policies.component';
import { MyPoliciesComponent } from './components/my-policies/my-policies.component';
import { RefundsComponent } from './components/refunds/refunds.component';
import { RequestComponent } from './components/request/request.component';
import { ViewPoliciesComponent } from './components/view-policies/view-policies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowBookingHistoryComponent,
    ShowBookingHistoryForLoggedInUserComponent,
    SearchFlightComponent,
    BookingPipePipe,
    BookingPipe1Pipe,
    LoginComponent,
    HeaderComponent,
    UserHomeComponent,
    AdminHomeComponent,
    RegisterComponent,
    ResetPasswordComponent,
    AddAdminComponent,
    FeedbackComponent,
    MyFeedbackComponent,
    EditFeedbackComponent,
    GetFeedbacksComponent,
    FeedbackSearchPipe,
    RefundPoliciesComponent,
    MyPoliciesComponent,
    RefundsComponent,
    RequestComponent,
    ViewPoliciesComponent,
    FeedbackSearchPipe,
    ProfileComponent,
    EditUserComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
