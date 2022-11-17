import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionsComponent } from './add-avions/add-avions.component';
import { UpdateAvionsComponent } from './update-avions/update-avions.component';

const routes: Routes = [
  {path: "Avions", component : AvionsComponent},
  {path: "add-Avions", component : AddAvionsComponent},
  {path: "", redirectTo: "Avions", pathMatch: "full"},
  {path: "updateAvions/:id", component: UpdateAvionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
