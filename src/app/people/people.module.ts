import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonDetailComponent } from "./person-detail.component";
import { PeopleRoutingModule } from "./people-routing";
import { PersonListComponent } from "./person-list.component";

@NgModule({
  declarations: [PersonDetailComponent, PersonListComponent],
  imports: [CommonModule, PeopleRoutingModule]
})
export class PeopleModule {}
