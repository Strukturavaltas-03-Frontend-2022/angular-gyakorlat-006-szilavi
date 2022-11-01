import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  todoList: Event[] = [
    {
      name: 'Bevásárlás',
      date: '2022.11.12',
      time: '14.00',
      location: {
        address: 'Tesco utca 1.',
        city: 'Békéscsaba',
        country: 'Magyarország',
      },
    },
    {
      name: 'Főzés',
      date: '2022.11.12',
      time: '16.00',
      location: {
        address: 'Otthon utca 1.',
        city: 'Békéscsaba',
        country: 'Magyarország',
      },
    },
    {
      name: 'Biciklizés',
      date: '2022.11.14',
      time: '08.00',
      location: {
        address: 'Park utca 1.',
        city: 'Békéscsaba',
        country: 'Magyarország',
      },
    },
  ];

  constructor() {}

  getAll(): Event[] {
    return this.todoList;
  }
}
