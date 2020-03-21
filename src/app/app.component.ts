import {Component, InjectFlags, InjectionToken, NgModuleRef, OnInit} from '@angular/core';
import { AppModule } from './app.module';
import { Compiler} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'i18nProject';
  ipx: FormControl;

  constructor(
    public _m: NgModuleRef<AppModule>,
    public _c: Compiler,
    private _fb: FormBuilder
  ) {
    // const testTk = new InjectionToken<Compiler>('Compiler in app component');
    // console.log(_c.getModuleId(AppModule));
    // console.log(Compiler);
    // console.log(_m);
  }

  ngOnInit(): void {
    this.ipx = this._fb.control(null);
  }
}
