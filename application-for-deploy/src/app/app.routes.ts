import { Routes } from '@angular/router';
import { ErrorPage } from '@core/components';
import { AppRoutes } from '@core/constants/enums'

export const APP_ROUTES: Routes = [
    {
        path: AppRoutes.HOME,
        loadComponent: () =>
          import('./modules/dashboard').then(
            m => m.Dashboard
          ),
    },
    {
    path: AppRoutes.NEWS_ITEM,
        loadComponent: () =>
          import('./modules/news-item').then(
            m => m.NewsItem
          ),
    },
    { path: AppRoutes.NOT_FOUND, pathMatch: 'full', component: ErrorPage },
    { path: '**', pathMatch: 'full', redirectTo: AppRoutes.NOT_FOUND},
    
];
