import {Component, Inject, Injector, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  name = 'this is app child';

  check = false
  constructor(
    public injector: Injector
  ) { }

  ngOnInit() {
    console.log("Child comp injector => ", this.injector)
  }

}
