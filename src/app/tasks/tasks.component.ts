import { TasksService } from "./tasks.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  file;
  constructor(private tasksService: TasksService) {}

  ngOnInit() {}

  detectFileChanges(files) {
    this.file = files[0];
    console.log(this.file);
    this.submitForm();
  }

  submitForm() {
    const data = new FormData();
    data.append("fichier", this.file);
    this.tasksService.attachFile(data).subscribe(
      data => {
        alert("upload success");
      },
      error => {
        alert("upload error");
      }
    );
  }
}
