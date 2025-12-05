import { Routes } from '@angular/router';
import { CoursesListComponent } from './pages/list-courses/list-courses';
import { authGuard } from '../../core/guards/auth-guard';

export const COURSES_ROUTES: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: '', component: CoursesListComponent },
            { path: '**', redirectTo: '' }
        ]
    }
];
