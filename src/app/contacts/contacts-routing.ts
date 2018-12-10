import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactListComponent } from "./contact-list.component";

const routes: Routes = [
  { path: "contacts/list", component: ContactListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
