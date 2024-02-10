import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fetch-api.component.html',
  styleUrl: './fetch-api.component.css'
})
export class FetchApiComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchAndSortUserData();
  }

  fetchAndSortUserData() {
    this.apiService.fetchUsers().subscribe(users => {
      this.users = users.sort((a, b) => {
        return a.name.last.localeCompare(b.name.last);
      });
    });
  }
}

