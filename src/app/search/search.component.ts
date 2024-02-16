import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSerchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  // Custom event...There are two steps:
  // FIRST we have to create a property and specify it's type as event emitter
  // SECOND we have to decorate it with @Output() Decorator

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSerchValue)
  }
  // We have to raise this event
}
