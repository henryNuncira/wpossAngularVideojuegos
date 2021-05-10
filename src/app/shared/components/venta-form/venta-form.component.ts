import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { ventaI } from '../models/venta.interface';

@Component({
  selector: 'app-venta-form',
  templateUrl: './venta-form.component.html',
  styleUrls: ['./venta-form.component.scss']
})
export class VentaFormComponent implements OnInit {

  bandera : number =0;

  venta : ventaI;
  estado : number;
  message : string;
  ventaForm: FormGroup;

    constructor(private router:Router, private fb:FormBuilder, private api:ServiceService) {
      const navigation= this.router.getCurrentNavigation();
      this.venta = navigation.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.venta == 'undefined'){//sino existe el proveedor crea uno nuevaVenta
            this.bandera = 1;
            this.router.navigate(['nuevaVenta']);
          }else{
            this.ventaForm.patchValue(this.venta);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    GuargarVenta() : void{
// si el proveedor no existe creelo

    // if( this.proveedorForm.valid){
if( this.bandera==1){
  debugger;
        this.api.PostNewVentas(this.ventaForm.value).subscribe(
          respuesta =>{
            this.estado = respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Venta creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listadoVentas']);
            } else {
              Swal.fire({

                title: 'Venta no se ha creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })

            }

          }
        );
      //}
        } else this.toChange();
    this.ventaForm.reset();


        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyVenta(this.venta.idVenta,this.ventaForm.value).subscribe(
        resp=>{

          // this.estado= resp.state;
          // this.message= resp.message;

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu trabajo ha sido guardado',
            showConfirmButton: false,
            timer: 1500
          })


      },error => console.error(error));
      this.router.navigate(['listadoVentas']);
    }
    tolistadoVentas() :void{
      this.router.navigate(['listadoVentas']);
    }

    private initForm(): void {
      this.ventaForm = this.fb.group({
        idVenta: ['',[Validators.required]],
        tipoComprobante:['',[Validators.required]],
        numeroComprobante:['',[Validators.required]],

        fechaEntrega:['',[Validators.required]],
        total:['',[Validators.required]],


      });
    }

  }

