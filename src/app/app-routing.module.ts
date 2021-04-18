import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layouts/layout/base/base.component';


const routes: Routes = [
  {
    path: '', component: BaseComponent,
    children: [
      { path: 'auth', loadChildren: () => import('./views/pages/authentication/authentication.module').then(m => m.AuthenticationModule) },
      { path: '', loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule) },
      { path: 'product', loadChildren: () => import('./views/pages/product/product.module').then(m => m.ProductModule) },
      { path: 'primary-transformation', loadChildren: () => import('./views/pages/primary-transformation/primary-transformation.module').then(m => m.PrimaryTransformationModule) },
      { path: 'secondary-transformation', loadChildren: () => import('./views/pages/secondary-transformation/secondary-transformation.module').then(m => m.SecondaryTransformationModule) },
      { path: 'user-management', loadChildren: () => import('./views/pages/user/user.module').then(m => m.UserModule) },
      // { path: 'test', loadChildren: () => import('./views/pages/test/test.module').then(m => m.TestModule), canActivate: [AuthGuard]},
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
