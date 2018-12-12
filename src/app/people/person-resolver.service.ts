import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { PeopleService } from "./people.service";

@Injectable()
export class PersonDataResolver implements Resolve<any> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const personId = +route.params["personId"];
    return this.peopleService.getPersonById(personId);
  }
}
