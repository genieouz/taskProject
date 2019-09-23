import { LoginComponent } from './auth/component/login/login.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "tasks", component: TasksComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
