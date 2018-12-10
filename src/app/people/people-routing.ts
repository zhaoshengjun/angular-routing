import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonDetailComponent } from "./person-detail.component";

const routes: Routes = [
  { path: "people/:personId", component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
