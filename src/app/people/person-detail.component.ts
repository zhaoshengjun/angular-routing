import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "./people.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetailComponent implements OnInit {
  person;
  constructor(
    private activeRoute: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.activeRoute.data.subscribe(data => {
      this.person = data["person"];
    });
  }
}
