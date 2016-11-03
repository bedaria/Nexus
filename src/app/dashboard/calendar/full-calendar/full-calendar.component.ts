import { Component, ViewChild, ViewEncapsulation, Input, Output, ElementRef, EventEmitter } from '@angular/core';

import * as jQuery from 'jquery';
import './full-calendar.loader.ts';

@Component({
  selector: 'full-calendar',
  template: require('./full-calendar.html'),
  encapsulation: ViewEncapsulation.None
})
export class FullCalendarComponent {

  @Input() fullCalendarConfiguration:Object;
  @Input() fullCalendarClass:string;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('fullCalendar') private _selector:ElementRef;

  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.fullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }

}
