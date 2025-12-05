import { Routes } from '@angular/router';
import { loginGuard } from './core/guards/login-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
    },
    {
        path: 'users',
        loadChildren: () => import('./features/users/users.routes').then(m => m.USERS_ROUTES)
    },
    {
        path: 'courses',
        loadChildren: () => import('./features/courses/courses.routes').then(m => m.COURSES_ROUTES)
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];
