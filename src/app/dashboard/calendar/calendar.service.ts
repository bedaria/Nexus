import { Injectable } from '@angular/core';

@Injectable()
export class CalendarService {

  constructor() { }

  getData() {
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-11-02',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'All Day Event',
          start: '2016-11-01',
          color: 'blue'
        },
        {
          title: 'Long Event',
          start: '2016-11-07',
          end: '2016-11-10',
          color: 'blue'
        },
        {
          title: 'Dinner',
          start: '2016-11-14T20:00:00',
          color: 'blue'
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: 'blue'
        }
      ]
    };
  }

}
