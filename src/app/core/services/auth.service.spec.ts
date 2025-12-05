import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private users = [
    { email: 'admin@tec.com', password: '123456', role: 'admin', token: 'admin-token' },
    { email: 'profe@tec.com', password: '123456', role: 'profesor', token: 'prof-token' },
    { email: 'alumno@tec.com', password: '123456', role: 'estudiante', token: 'est-token' }
  ];

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (!user) return false;

    localStorage.setItem('token', user.token);
    localStorage.setItem('role', user.role);

    return true;
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout() {
    localStorage.clear();
  }
}
