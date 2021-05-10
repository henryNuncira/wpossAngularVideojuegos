import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import {  detalleVentaI} from 'src/app/shared/components/models/detalleventa.interface';


@Component({
  selector: 'app-listar-detalle-venta',
  templateUrl: './listar-detalle-venta.component.html',
  styleUrls: ['./listar-detalle-venta.component.scss']
})
export class ListarDetalleVentaComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadodetalleDetalleVenta : detalleVentaI[];
 DetalleVenta : detalleVentaI;


  constructor(http: HttpClient ,private api:ServiceService,private router:Router) {}

  ngOnInit(): void {
    this.getAllDetalleVentas();
  }


 public getAllDetalleVentas(){

  this.api.getAllDetalles().subscribe(resp =>
    {
      this.listadodetalleDetalleVenta= resp;
      console.log(this.listadodetalleDetalleVenta);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditar(ventaEdi:any):void{
    this.navigationExtras.state.value = ventaEdi;
    this.router.navigate(['editarDetalleVenta'], this.navigationExtras)
  }
  toVer(ventaVer:any):void{
    this.navigationExtras.state.value = ventaVer;
    this.router.navigate(['detalleDetalleVenta'], this.navigationExtras);
  }



  toList():void{
    this.router.navigate(['listadodetalleDetalleVenta'])
  }
  toNuevo():void{
    this.router.navigate(['nuevoDetalleVenta'])
  }
}
