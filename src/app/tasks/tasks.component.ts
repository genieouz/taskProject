import { environment } from 'src/environments/environment';
import { TasksService } from "./tasks.service";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Task } from './interface/task.interface';
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  file;
  tasks: Task[];
  titre: string;
  etat: string;
  API_URL: string = environment.API_URL;
  constructor(private tasksService: TasksService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.tasksService.getTasks().subscribe(
      (taches: { status: string; message: Task[] }) => {
        this.tasks = taches.message;
      }
    )
  }

  detectFileChanges(files) {
    this.file = files[0];
    console.log(this.file);
    this.submitForm();
  }

  submitForm() {
    const data = new FormData();
    data.append("fichier", this.file);
    data.append('titre', this.titre);
    data.append('etat',this.etat);
    this.tasksService.addTask(data).subscribe(
      (rep: any) => {
        console.log('rep',rep.message);
        //this.tasks.push(rep.message);
      },
      error => {
        alert("upload error");
      }
    );
  }

  generateLink(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
