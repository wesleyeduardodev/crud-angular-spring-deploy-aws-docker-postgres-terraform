import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/task";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  constructor(
    private service: TaskService,
    private toast: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  task: Task = {
    id: null,
    name: null
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));

  create(): void {
    this.service.create(this.task)
      .subscribe(
        {
          next: () => {
            this.toast.success('Tarefa cadastrado com sucesso', 'Cadastro');
            this.router.navigate(['tasks'])
          },
          error: (erro) => {
            this.toast.error(erro.message);
          }
        }
      );
  }

  isValidFields(): boolean {
    return this.name.valid;
  }
}
