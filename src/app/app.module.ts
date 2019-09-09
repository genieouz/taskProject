import { TasksService } from "./tasks/tasks.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { TasksComponent } from "./tasks/tasks.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register("ngsw-worker.js"),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
