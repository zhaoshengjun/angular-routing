import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "./people.service";

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
    this.activeRoute.params.subscribe(data => {
      const personId = data["personId"];
      this.peopleService.getPersonById(+personId).subscribe(person => {
        this.person = person;
      });
    });
  }
}
