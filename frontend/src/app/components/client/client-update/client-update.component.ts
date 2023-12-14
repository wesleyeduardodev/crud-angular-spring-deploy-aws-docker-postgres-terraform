import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client: Client = {
    id: null,
    name: null,
    cpfCnpj: null,
    telephone: null,
    email: null
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpfCnpj: FormControl = new FormControl(null, Validators.minLength(11));
  email: FormControl = new FormControl(null, Validators.email);
  telephone: FormControl = new FormControl(null, Validators.minLength(11));

  constructor(
    private service: ClientService,
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.client.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.client.id).subscribe(response => {
      this.client = response;
    })
  }

  update(): void {
    this.normalizeFields();
    this.service.update(this.client)
      .subscribe(
        {
          next: () => {
            this.toast.success('Cliente atualizado com sucesso', 'Cadastro');
            this.router.navigate(['clients'])
          },
          error: (erro) => {
            this.toast.error(erro.message);
          }
        }
      );
  }

  isCamposValidos(): boolean {
    return this.name.valid && this.cpfCnpj.valid && this.email.valid && this.telephone.valid
  }

  //TODO Melhorar e incluir em uma class utilitária
  normalizeFields() {
    if (this.client.id != null && this.client.id.length == 0) {
      this.client.id = null;
    }
    if (this.client.cpfCnpj != null && this.client.cpfCnpj.length == 0) {
      this.client.cpfCnpj = null;
    }
    if (this.client.email != null && this.client.email.length == 0) {
      this.client.email = null;
    }
    if (this.client.telephone != null && this.client.telephone.length == 0) {
      this.client.telephone = null;
    }
  }
}
