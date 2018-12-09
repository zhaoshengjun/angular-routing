import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notfound",
  template: `
    <p>Sorry, the page you are looking for cannot be found.</p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
