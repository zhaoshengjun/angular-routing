import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-person-detail",
  templateUrl: "./person-detail.component.html",
  styleUrls: ["./person-detail.component.css"]
})
export class PersonDetailComponent implements OnInit {
  personId: string;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(data => {
      console.log(data);
      this.personId = data["personeId"];
    });
  }
}
