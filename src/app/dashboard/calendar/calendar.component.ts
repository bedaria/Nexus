import { Component, ViewEncapsulation } from '@angular/core';

import * as jQuery from 'jquery';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'calendar',
  template: require('./calendar.html'),
  styles: [require('./calendar.scss')],
  encapsulation: ViewEncapsulation.None,
  providers: [CalendarService]
})
export class CalendarComponent {

  public calendarConfiguration:any;
  private _calendar:Object;

  constructor(private _calendarService:CalendarService) {
    this.calendarConfiguration = this._calendarService.getData();
    this.calendarConfiguration.select = (start, end) => {
      this._onSelect(start, end);
    };
  }

  public onCalendarReady(calendar):void {
    this._calendar = calendar;
  }

  private _onSelect(start, end):void {
    if (this._calendar != null) {
      let title = prompt('Create an event:');
      let eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        jQuery(this._calendar).fullCalendar('renderEvent', eventData, true);
        jQuery(this._calendar);
      }
      jQuery(this._calendar).fullCalendar('unselect');
    }
  }

}
