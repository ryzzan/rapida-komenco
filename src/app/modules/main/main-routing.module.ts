import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Components */
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'profile/:id', component: ProfileComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  ]},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

const acl = localStorage.getItem('user_data');

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

/**
 * TO-DO
 * GUARD OVER PATH
 */

// const buildMenuOverAcl = (acl: any) => {
//   const aclObject = JSON.parse(acl);
//   const array = aclObject.acl.permissions;
//   const routeArray = [];

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     routeArray.push({
//       path: element.moduleId.menu.route,
//       component: `${element.moduleId.name}Component`
//     })
//   }
// }

// buildMenuOverAcl(acl);