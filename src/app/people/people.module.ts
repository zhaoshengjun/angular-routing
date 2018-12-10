import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonDetailComponent } from "./person-detail.component";
import { PeopleRoutingModule } from "./people-routing";

@NgModule({
  declarations: [PersonDetailComponent],
  imports: [CommonModule, PeopleRoutingModule]
})
export class PeopleModule {}
