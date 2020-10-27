import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  loggedIn: boolean = false;
  ngOnInit() {
    setInterval(() => {
      if (localStorage.getItem("token")) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }, 1000);
  }
}
