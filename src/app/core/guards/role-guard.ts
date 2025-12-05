import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class roleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const expectedRoles: string[] = route.data['roles'] ?? [];
    const userRole = this.auth.getUserRole();

    if (!userRole) {
      return this.router.parseUrl('/auth/login');
    }

    if (expectedRoles.length === 0 || expectedRoles.includes(userRole)) {
      return true;
    }

    return this.router.parseUrl('/dashboard');
  }
}
