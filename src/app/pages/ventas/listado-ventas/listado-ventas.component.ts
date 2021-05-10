import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { ventaI } from 'src/app/shared/components/models/venta.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-ventas',
  templateUrl: './listado-ventas.component.html',
  styleUrls: ['./listado-ventas.component.scss']
})
export class ListadoVentasComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoVentas : ventaI[];
 venta : ventaI;


  constructor(http: HttpClient ,private api:ServiceService,private router:Router) {}

  ngOnInit(): void {
    this.getAllVentas();
  }


 public getAllVentas(){

  this.api.getAllVentas().subscribe(resp =>
    {
      this.listadoVentas= resp;
      console.log(this.listadoVentas);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditar(ventaEdi:any):void{
    this.navigationExtras.state.value = ventaEdi;
    this.router.navigate(['editarVenta'], this.navigationExtras)
  }
  toVer(ventaVer:any):void{
    this.navigationExtras.state.value = ventaVer;
    this.router.navigate(['detallesVenta'], this.navigationExtras);
  }

  toDelete(idVenta:number) : void{
    this.api.DeleteVenta(idVenta).subscribe(resp=>{


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
    this.router.navigate(['listadoVentas'])
  }
  toNuevo():void{
    this.router.navigate(['nuevaVenta'])
  }
}



