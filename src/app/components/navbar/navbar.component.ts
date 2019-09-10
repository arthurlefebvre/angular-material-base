import { Component, OnInit, Input, ViewChild } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { filter, withLatestFrom } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  @ViewChild("drawer", { static: true }) drawer: MatSidenav;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.router.events
      .pipe(
        withLatestFrom(this.isHandset),
        filter(([a, b]) => b && a instanceof NavigationEnd)
      )
      .subscribe(_ => this.drawer.close());
  }

  @Input() title: string = "AppTitle";

  ngOnInit() {}
}
