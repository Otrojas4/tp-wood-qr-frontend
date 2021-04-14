import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    //path: '', component: BaseComponent,
    path: '', canActivate: [],
    children: [
      { path: 'auth', loadChildren: () => import('./views/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
      // { path: 'auth', loadChildren: () => import('./views/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
      // { path: 'dashboard', loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]},
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
