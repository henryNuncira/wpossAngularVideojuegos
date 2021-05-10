import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2';
import { VideojuegosI } from '../models/videojuegos.interface';

@Component({
  selector: 'app-video-juego-form',
  templateUrl: './video-juego-form.component.html',
  styleUrls: ['./video-juego-form.component.scss']
})
export class VideoJuegoFormComponent implements OnInit {
  bandera : number =0;

  videoJuego : VideojuegosI;
  estado : number;
  message : string;
  videosForm: FormGroup;

    constructor(private router:Router, private fb:FormBuilder, private api:ServiceService) {
      const navigation= this.router.getCurrentNavigation();
      this.videoJuego = navigation.extras?.state?.value;

      this.initForm();
    }

    ngOnInit(): void {

          if(typeof this.videoJuego == 'undefined'){//sino existe el proveedor crea uno nuevo
            this.bandera = 1;
            this.router.navigate(['nuevo']);
          }else{
            this.videosForm.patchValue(this.videoJuego);

           //popular el proveedor si ya existe montarel empleado a editar en el formulario
      }
    }

    toGuardarVideo() : void{
// si el proveedor no existe creelo

    // if( this.proveedorForm.valid){
if( this.bandera==1){
        this.api.PostNewVideo(this.videosForm.value).subscribe(
          respuesta =>{
            this.estado = respuesta.state;

            if (this.estado == 200) {
              Swal.fire({

                title: 'Video juego creado correctamente',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              this.router.navigate(['list']);
            } else {
              Swal.fire({

                title: 'Producto no se ha creado correctamente',
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
    this.videosForm.reset();


        }

        toChange(): void{
      //this.ProveedorBorrar=7;

      this.api.PutModifyVideo(this.videoJuego.idVideoJuego,this.videosForm.value).subscribe(
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
      this.router.navigate(['list']);
    }
    toList() :void{
      this.router.navigate(['list']);
    }

    private initForm(): void {
      this.videosForm = this.fb.group({
        idVideoJuego: ['',[Validators.required]],
        nombre:['',[Validators.required]],
        titulo:['',[Validators.required]],
        stock:['',[Validators.required]],
        ano:['',[Validators.required]],
        protagonista:['',[Validators.required]],
        productor:['',[Validators.required]],
        director:['',[Validators.required]],
        tecnologia:['',[Validators.required]],
        precio:['',[Validators.required]],
        imagen:['',[Validators.required]],

      });
    }

  }

