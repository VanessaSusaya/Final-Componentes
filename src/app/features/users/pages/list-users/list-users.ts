import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../core/services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-users.html',
  styleUrls: ['./list-users.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = [];
  loading = false;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: data => { this.users = data; this.loading = false; },
      error: err => { this.error = 'Error al cargar usuarios'; this.loading = false; }
    });
  }
}
