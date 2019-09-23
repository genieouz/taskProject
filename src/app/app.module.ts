import { RegisterComponent } from './auth/component/register/register.component';
import { LoginComponent } from './auth/component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppInterceptor } from './interceptors/app.interceptor';
import { TasksService } from "./tasks/tasks.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { TasksComponent } from "./tasks/tasks.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, TasksComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
