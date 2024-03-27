import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReclamiComponent } from "./pages/reclami/reclami.component";
import { ReclamoComponent } from "./pages/reclamo/reclamo.component";
const routes: Routes = [
  {
    path: 'reclami',
    children: [
      {
        path: '',
        component: ReclamiComponent
      }
    ]
  },
  {
    path: 'reclamo',
    children: [
      {
        path: '',
        component: ReclamoComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'reclami',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
