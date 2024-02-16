import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
 // To achive custom propery binding we use INPUT DECORATOR
//       We need to import Input from angular core first

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input("total") all: number = 0;
  @Input() free: number = 0;
  @Input() premium: number = 0;
  // We receive data from a parent component class with  @Input Decorator

  selectedRadioButtonValue: string = "All";

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  // Custom event...There are two steps:
  // FIRST we have to create a property and specify it's type as event emitter
  // SECOND we have to decorate it with @Output() Decorator

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    //console.log(this.selectedRadioButtonValue);
  }
}
