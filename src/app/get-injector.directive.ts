import {Directive, Injector, Input, OnInit} from '@angular/core';
import {AppComponent} from './app.component';

@Directive({
  selector: '[appGetInjector]'
})
export class GetInjectorDirective implements OnInit {

  @Input() appGetInjector = 'Default directive';
  constructor(
    private appComp: AppComponent,
    private injector: Injector
  ) {

  }

  ngOnInit(): void {
    console.log(this.appGetInjector , 'directive Injector => ', this.injector);
    console.log(this.appGetInjector, 'appComp in directive =>', this.appComp);
  }

}
