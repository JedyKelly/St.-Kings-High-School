import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./shared/login/login.component";
import { SignupComponent } from "./shared/login/signup.component";
import { SettingsComponent } from "./settings/settings.component";
import { AuthGuard } from "./services/auth-guard.service";
// setup pages
import { JobCodeComponent } from "./setup/jobcode.component";
import { LeaveCodeComponent } from "./setup/leavecode.component";
import { SalaryCodeComponent } from "./setup/salarycode.component";
// manage pages
import { VoucherComponent } from "./manage/voucher.component";
import { EmployeeComponent } from "./manage/employee.component";
import { SalaryComponent } from "./manage/salary.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashRouteComponent } from "./dash-route/dash-route.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "about", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "kings",
    component: DashRouteComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
        canActivate: [AuthGuard],
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "settings",
        component: SettingsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "jobcode",
        component: JobCodeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "leavecode",
        component: LeaveCodeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "salarycode",
        component: SalaryCodeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "voucher",
        component: VoucherComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "employee",
        component: EmployeeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "salary/:id",
        component: SalaryComponent,
        canActivate: [AuthGuard],
      },
      { path: "salary", component: SalaryComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
