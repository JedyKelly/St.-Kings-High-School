import { BrowserModule } from "@angular/platform-browser";
import { LayoutModule } from "@angular/cdk/layout";
import { ElishCustomMaterialModule } from "./shared/elish.material.module";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DashboardHeaderComponent } from "./shared/header/dash.header.component";
import { HeaderComponent } from "./shared/header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { HelpdeskComponent } from "./shared/helpdesk/helpdesk.component";
import { BackendService } from "./services/backend-service";
import { AuthGuard } from "./services/auth-guard.service";

import { LoginComponent } from "./shared/login/login.component";
import { SignupComponent } from "./shared/login/signup.component";
import { SettingsComponent } from "./settings/settings.component";
// setup pages
import { JobCodeComponent } from "./setup/jobcode.component";
import { LeaveCodeComponent } from "./setup/leavecode.component";
import { SalaryCodeComponent } from "./setup/salarycode.component";
// manage pages
import { VoucherComponent } from "./manage/voucher.component";
import { EmployeeComponent } from "./manage/employee.component";
import { SalaryComponent } from "./manage/salary.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from "ng2-charts";
import { DashRouteComponent } from './dash-route/dash-route.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardHeaderComponent,
    HeaderComponent,
    HelpdeskComponent,
    LoginComponent,
    SignupComponent,
    SettingsComponent,
    JobCodeComponent,
    LeaveCodeComponent,
    SalaryCodeComponent,
    VoucherComponent,
    EmployeeComponent,
    SalaryComponent,
    HomeComponent,
    DashboardComponent,
    DashRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    ElishCustomMaterialModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [BackendService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
