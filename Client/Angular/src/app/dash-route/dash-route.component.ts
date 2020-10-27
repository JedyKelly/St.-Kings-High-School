import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dash-route",
  templateUrl: "./dash-route.component.html",
  styleUrls: ["./dash-route.component.css"],
})
export class DashRouteComponent implements OnInit {
  nav: any[] = [
    { name: "Dashboard", url: "/kings", icon: "dashboard" },
    { name: "Employee", url: "employee", icon: "people" },
    { name: "Salary Vouchers", url: "salary", icon: "payment" },
    { name: "Vouchers", url: "voucher", icon: "card_membership" },
    // { name: "Add Employee", url: "/add-employee", icon: "money" },
    { name: "Job Code", url: "jobcode", icon: "schedule" },
    { name: "Salary Code", url: "salarycode", icon: "money" },
    { name: "Leave Code", url: "leavecode", icon: "new_releases" },
    // { name: "Home", url: "/home", icon: "home" },
    { name: "Logout", url: "/logout", icon: "logout" },
  ];
  constructor() {}

  ngOnInit() {}
}
