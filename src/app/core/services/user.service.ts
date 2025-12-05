import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API}/usuarios`);
  }

  getUser(id: number) {
    return this.http.get<User>(`${API}/usuarios/${id}`);
  }

  createUser(u: Partial<User>) {
    return this.http.post<User>(`${API}/usuarios`, u);
  }

  updateUser(id: number, u: Partial<User>) {
    return this.http.put<User>(`${API}/usuarios/${id}`, u);
  }

  deleteUser(id: number) {
    return this.http.delete(`${API}/usuarios/${id}`);
  }
}
