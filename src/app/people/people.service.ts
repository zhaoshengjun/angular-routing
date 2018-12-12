import { Injectable } from "@angular/core";
import { of } from "rxjs";
const people = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor() {}

  getPersonById(personId: number) {
    return of(people.filter(x => x.id === personId));
  }

  getAll() {
    return of(people);
  }
}
