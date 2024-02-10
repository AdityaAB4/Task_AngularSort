import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel, NgModelGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Person {
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular_jsonsort';
  people: Person[] = [
    {"first_name": "John", "last_name": "Doe"},
    {"first_name": "Alice", "last_name": "Smith"},
    {"first_name": "Bob", "last_name": "Johnson"},
    {"first_name": "Emma", "last_name": "Brown"},
    {"first_name": "Michael", "last_name": "Davis"}
  ];
  originalPeople!: Person[];

  ngOnInit() {
    this.originalPeople = [...this.people];
    this.sortPeopleByLastName();

  }

  sortPeopleByLastName() {
    this.people.sort((a, b) => {
      return a.last_name.localeCompare(b.last_name);
    });
  }
}
