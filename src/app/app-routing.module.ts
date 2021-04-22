import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { BaseComponent } from './views/layouts/layout/base/base.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./views/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: 'product', loadChildren: () => import('./views/pages/product/product.module').then(m => m.ProductModule) },
      { path: 'primary-transformation', loadChildren: () => import('./views/pages/primary-transformation/primary-transformation.module').then(m => m.PrimaryTransformationModule), canActivate: [AuthGuard] },
      { path: 'secondary-transformation', loadChildren: () => import('./views/pages/secondary-transformation/secondary-transformation.module').then(m => m.SecondaryTransformationModule), canActivate: [AuthGuard] },
      { path: 'user-management', loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
      { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
      //{ path: '', redirectTo: '', pathMatch: 'full' },
    ]
  },
  { path: '**', loadChildren: () => import('./views/pages/not-found/not-found.module').then(m => m.NotFoundModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
