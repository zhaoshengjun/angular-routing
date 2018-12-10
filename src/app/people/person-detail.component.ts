import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetailComponent implements OnInit {
  personId: string;
  shouldShowChildren = false;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      this.personId = data["personeId"];
    });

    this.activeRoute.queryParams.subscribe(data => {
      this.shouldShowChildren = data["showChild"] === "true";
    });
  }
}
