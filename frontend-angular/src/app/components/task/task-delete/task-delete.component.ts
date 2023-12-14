import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Task} from "../../../models/task";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  task: Task = {
    id: '',
    name: ''
  }

  constructor(
    private service: TaskService,
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.task.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.task.id).subscribe(response => {
      this.task = response;
    })
  }

  delete(): void {
    this.service.delete(this.task.id)
      .subscribe(
        {
          next: () => {
            this.toast.success('Tarefa removida com sucesso', 'Cadastro');
            this.router.navigate(['tasks'])
          },
          error: (erro) => {
            this.toast.error(erro.message);
          }
        }
      );
  }
}
