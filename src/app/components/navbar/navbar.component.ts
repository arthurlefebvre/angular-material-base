import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}
  title: string = "Douanes";
  opened: boolean = true;

  folders: any[] = [
    {
      name: "Photos",
      updated: new Date("1/1/16")
    },
    {
      name: "Recipes",
      updated: new Date("1/17/16")
    },
    {
      name: "Work",
      updated: new Date("1/28/16")
    }
  ];
  notes: any[] = [
    {
      name: "Vacation Itinerary",
      updated: new Date("2/20/16")
    },
    {
      name: "Kitchen Remodel",
      updated: new Date("1/18/16")
    }
  ];

  ngOnInit() {}
}
