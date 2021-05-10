import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { clientesI } from '../models/cliente.interface';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styles: [
  ]
})
export class ClienteFormComponent implements OnInit {

  bandera : number =0;

  cliente:clientesI;
  estado : number;
  message : string;
  clienteForm: FormGroup;
  private isEmail = /\S+@\S+\.\S+/;


    constructor(private router:Router, private fb:FormBuilder, private api:ServiceService) {
      const navigation= this.router.getCurrentNavigation();
      this.cliente = navigation.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.cliente == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevoCliente']);
          }else{
            this.clienteForm.patchValue(this.cliente);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardar() : void{

  if( this.bandera==1){
        this.api.PostNewCliente(this.clienteForm.value).subscribe(
          respuesta =>{


            this.estado= respuesta.state;
            if (this.estado == 200) {
              Swal.fire({

                title: 'Cliente creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoClientes']);
            } else {
              Swal.fire({

                title: 'Cliente no se ha creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

            }
          });

        } else this.toChange();
    this.clienteForm.reset();
}

toChange(): void{


      this.api.PutModifyCliente(this.cliente.idCliente,this.clienteForm.value).subscribe(
        resp=>{

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu trabajo ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          })


      },error => console.error(error));
      this.router.navigate(['listadoClientes']);
    }
    toList() :void{
      this.router.navigate(['listadoClientes']);
    }


    private initForm(): void {
      this.clienteForm = this.fb.group({
        idCliente: ['',[Validators.required]],
        nombre:['',[Validators.required]],
        apellido:['',[Validators.required]],
        direccion:['',[Validators.required]],
        cedula:['',[Validators.required]],
        correo:['',[Validators.required, Validators.pattern(this.isEmail)]],
        edad:['',[Validators.required]],
        telefono:['',[Validators.required]],



      });
    }

  }

