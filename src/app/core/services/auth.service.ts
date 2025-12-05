import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, of } from 'rxjs';

const API = 'http://localhost:3000';
const TOKEN_KEY = 'escuela_token';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // espera un endpoint POST /auth/login => { token: '...' }
    return this.http.post<{ token: string }>(`${API}/auth/login`, { email, password }).pipe(
      map(res => {
        localStorage.setItem(TOKEN_KEY, res.token);
        return this.decodeToken(res.token);
      })
    );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  decodeToken(token: string | null) {
    if (!token) return null;
    try {
      const payload = token.split('.')[1];
      const json = atob(payload);
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  getUserRole(): string | null {
    const payload = this.decodeToken(this.getToken());
    return payload?.role ?? null;
  }

  getUserId(): number | null {
    const payload = this.decodeToken(this.getToken());
    return payload?.id ?? null;
  }
}
