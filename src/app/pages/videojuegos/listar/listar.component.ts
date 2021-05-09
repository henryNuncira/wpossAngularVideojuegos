import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { VideojuegosI } from 'src/app/shared/components/models/videojuegos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoVideos : VideojuegosI[];
 video:VideojuegosI;


  constructor(http: HttpClient ,private api:ServiceService,private router:Router) {}

  ngOnInit(): void {
    this.getAllVideos();
  }


 public getAllVideos(){

  this.api.getAllVideoGame().subscribe(resp =>
    {
      this.listadoVideos= resp;
      console.log(this.listadoVideos);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditar(videoJuegoEdi:any):void{
    this.navigationExtras.state.value = videoJuegoEdi;
    this.router.navigate(['editar'], this.navigationExtras)
  }
  toVer(videoJuegoVer:any):void{
    this.navigationExtras.state.value = videoJuegoVer;
    this.router.navigate(['detalles'], this.navigationExtras);
  }

  toDelete(idVideoJuego:number) : void{
    this.api.DeleteVideo(idVideoJuego).subscribe(resp=>{


      this.ngOnInit();

      Swal.fire({
        title: '¿Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire(
            'Borrado!',
            'Tu archivo ha sido eliminado.',
            'success'
          )
        }
      })
    },error => console.error(error));

  }

  toList():void{
    this.router.navigate(['list'])
  }
  toNuevo():void{
    this.router.navigate(['nuevo'])
  }
}


