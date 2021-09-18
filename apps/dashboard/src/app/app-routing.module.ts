import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { APIsComponent } from './apis/apis.component';
import { LoginComponent, WildComponent } from "@public-apis/ui-login";
import { APIComponent } from './api/api.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'entries', component: APIsComponent},
  {path: 'entries/:API', component: APIComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }