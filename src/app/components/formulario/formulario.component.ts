import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user';
import { UserServiceService } from 'app/service/user-service.service';
import { text } from 'stream/consumers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  focus;
  focus1;
  focus2;

  form: FormGroup;
  mostrarComponenteAdicional: boolean = false;
  nameLocalStorage: string;
  errorMensage: string;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(12)])
    });
  }

  save(): any {

    let user = new User();
    user.name = this.form.get('name').value;
    user.email = this.form.get('email').value;
    user.tel = this.form.get('tel').value;

    localStorage.setItem('userName', user.name);
    this.nameLocalStorage = localStorage.getItem('userName');


    this.userService.postUser(user).subscribe(
      {
        next: (data: User) => {
          console.log(data);
          this.form.reset();

          this.mostrarComponenteAdicional = true;
        },
        error: (error) => {
          if (error.status === 404) {
            Swal.fire(
              'el formato del nombre no es valido',

            )
          };
          if (error.status === 500) {
            Swal.fire(
              'El email ya se encuentra registrado'
            )
          }
        },
        complete() {

        },
      }
    )
  }

}
