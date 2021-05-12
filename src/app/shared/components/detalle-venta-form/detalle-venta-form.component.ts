import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { detalleVentaI } from '../models/detalleventa.interface';

@Component({
  selector: 'app-detalle-venta-form',
  templateUrl: './detalle-venta-form.component.html',
  styleUrls: ['./detalle-venta-form.component.scss']
})
export class DetalleVentaFormComponent implements OnInit {

  bandera : number =0;

  detalleVenta : detalleVentaI;
  estado : number;
  message : string;
  detalleVentaForm: FormGroup;

    constructor(private router:Router, private fb:FormBuilder, private api:ServiceService) {
      const navigation= this.router.getCurrentNavigation();
      this.detalleVenta = navigation.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.detalleVenta == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevo']);
          }else{
            this.detalleVentaForm.patchValue(this.detalleVenta);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarVideo() : void{
// si el proveedor no existe creelo

    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewDetalle(this.detalleVentaForm.value).subscribe(
          respuesta =>{
            this.estado = respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Detalle de venta creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['listarDetalleVenta']);
            } else {
              Swal.fire({

                title: 'Detalle de venta no se ha creado correctamente',
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
    this.detalleVentaForm.reset();


        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyDetalle(this.detalleVenta.idDetalle, this.detalleVentaForm.value).subscribe(
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
      this.router.navigate(['listarDetalleVenta']);
    }
    tolistarDetalleVenta() :void{
      this.router.navigate(['listarDetalleVenta']);
    }

    private initForm(): void {
      this.detalleVentaForm = this.fb.group({
        idDetalle: ['',[Validators.required]],

        tipoVenta:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
        cantidad:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
        precio:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
        descuento:['',[Validators.required,Validators.pattern('^[0-9]*$')]],

      });
    }
    onReset():void{
      this.detalleVentaForm.reset();
    }
    isValidField(campo:string): boolean{
      const fieldName = this.detalleVentaForm.get(campo);
      return fieldName.invalid && fieldName.touched;
    }
  }


