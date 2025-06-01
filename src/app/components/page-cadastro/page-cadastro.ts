import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../services/users';

@Component({
  selector: 'app-page-cadastro',
  standalone: false,
  templateUrl: './page-cadastro.html',
  styleUrl: './page-cadastro.scss'
})
export class PageCadastro {
  camposForm: FormGroup

  constructor(private service: Users){
    this.camposForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    })
  }

  salvar(){
    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
        next: users => console.log("Salva com sucesso!", users),
        error: error => console.error("Ocorreu um error!", error)
      })
    }
  }

}
