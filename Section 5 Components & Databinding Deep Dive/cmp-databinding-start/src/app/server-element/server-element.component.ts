import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  // Parent conpoment can access this with name of srvElement
  @Input('srvElement') element : { type : string, name : string, content : string};
  @Input() name : string;

  test : String;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
    console.log(changes);
  }

  ngOnInit(): void {
  }

  

}
