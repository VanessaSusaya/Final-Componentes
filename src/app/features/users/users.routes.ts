import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/list-users/list-users';
import { authGuard } from '../../core/guards/auth-guard';

export const USERS_ROUTES: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: '', component: UsersListComponent, data: { roles: ['admin', 'profesor'] } },
            { path: '**', redirectTo: '' }
        ]
    }
];
