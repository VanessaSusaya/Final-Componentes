import { Routes } from '@angular/router';
import { DashboardHomeComponent } from './pages/home/home';
import { authGuard } from '../../core/guards/auth-guard';

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: '', component: DashboardHomeComponent },
            { path: '**', redirectTo: '' }
        ]
    }
];
