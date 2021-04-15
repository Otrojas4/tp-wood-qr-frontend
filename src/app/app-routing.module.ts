import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layouts/layout/base/base.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./views/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
      // { path: 'auth', loadChildren: () => import('./views/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
      // { path: 'dashboard', loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]},
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
