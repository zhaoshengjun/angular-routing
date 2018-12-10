import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactListComponent } from "./contact-list.component";
import { ContactsRoutingModule } from "./contacts-routing";

@NgModule({
  declarations: [ContactListComponent],
  imports: [CommonModule, ContactsRoutingModule]
})
export class ContactsModule {}
