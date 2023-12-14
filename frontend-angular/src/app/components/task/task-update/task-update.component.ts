import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Task} from "../../../models/task";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task: Task = {
    id: null,
    name: null
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));

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

  update(): void {
    this.normalizeFields();
    this.service.update(this.task)
      .subscribe(
        {
          next: () => {
            this.toast.success('Tarefa atualizada com sucesso', 'Cadastro');
            this.router.navigate(['tasks'])
          },
          error: (erro) => {
            this.toast.error(erro.message);
          }
        }
      );
  }

  isCamposValidos(): boolean {
    return this.name.valid;
  }

  //TODO Melhorar e incluir em uma class utilitária
  normalizeFields() {
    if (this.task.id != null && this.task.id.length == 0) {
      this.task.id = null;
    }
  }
}
