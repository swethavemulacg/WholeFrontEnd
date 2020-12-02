import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowBookingHistoryComponent } from './BookingModule/show-booking-history/show-booking-history.component';
import { ShowBookingHistoryForLoggedInUserComponent } from './BookingModule/show-booking-history-for-logged-in-user/show-booking-history-for-logged-in-user.component';
import { SearchFlightComponent } from './BookingModule/search-flight/search-flight.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './authguard';
import { MyFeedbackComponent } from './components/my-feedback/my-feedback.component';
import { EditFeedbackComponent } from './components/edit-feedback/edit-feedback.component';
import { GetFeedbacksComponent } from './components/get-feedbacks/get-feedbacks.component';
import { RefundPoliciesComponent } from './components/refund-policies/refund-policies.component';
import { MyPoliciesComponent } from './components/my-policies/my-policies.component';
import { RefundsComponent } from './components/refunds/refunds.component';
import { RequestComponent } from './components/request/request.component';
import { ViewPoliciesComponent } from './components/view-policies/view-policies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'showBookingHistory',component:ShowBookingHistoryComponent},
  {path:'showBookingHistoryForUser',component:ShowBookingHistoryForLoggedInUserComponent},
  {path:'searchFlight',component:SearchFlightComponent},
  {path:'login-form', component:LoginComponent},
  {path:'home',component:AdminHomeComponent},
  {path:'customer',component:UserHomeComponent},
  {path:'register-form', component:RegisterComponent},
  {path:'reset-form', component:ResetPasswordComponent},
  {path:'admin-form', component:AddAdminComponent},
  {path:'add-feedback', component:FeedbackComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]},
  {path:'my-feedback', component:MyFeedbackComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]},
  {path:'edit-feedback', component:EditFeedbackComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]},
  {path:'get-feedbacks', component:GetFeedbacksComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]},
  {path:'refund-policies', component:RefundPoliciesComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]},
  {path:'policies', component:MyPoliciesComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard] }, 
  {path:'refunds', component:RefundsComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]},
  {path:'request-refund', component:RequestComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]},
  {path:'view-policies', component:ViewPoliciesComponent, data:{roles :['ROLE_ADMIN']}, canActivate : [AuthGuard]},
  {path:'profile', component:ProfileComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]},
  {path:'edit-profile', component:EditUserComponent, data:{roles :['ROLE_USER']}, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
