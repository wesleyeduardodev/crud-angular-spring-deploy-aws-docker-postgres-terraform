import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Client} from "../../../models/client";
import {ClientService} from "../../../services/client.service";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-client-create',
  templateUrl: './cliente-creat.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(
    private service: ClientService,
    private toast: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

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

  create(): void {
    this.normalizeFields();
    this.service.create(this.client)
      .subscribe(
        {
          next: () => {
            this.toast.success('Cliente cadastrado com sucesso', 'Cadastro');
            this.router.navigate(['clients'])
          },
          error: (erro) => {
            this.toast.error(erro.message);
          }
        }
      );
  }

  isValidFields(): boolean {
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
