import { Injectable } from "@angular/core";
import { NgxPrimerAlertState } from "../public-api";

@Injectable({
  providedIn: "root"
})
export class NgxPrimerAlertService {
  _state: NgxPrimerAlertState = "Close";
}