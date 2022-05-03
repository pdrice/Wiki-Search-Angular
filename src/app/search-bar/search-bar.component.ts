import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

@Output() submitted = new EventEmitter<string>();

term ="";

constructor() { }

onInput(event:any){
this.term = event.target.value;
console.log(this.term);
}

  ngOnInit(): void {
  }

  onFormSubmit(event:any){
    event.preventDefault();
    this.submitted.emit(this.term);
    
  }

}
