import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { detalleVentaI } from 'src/app/shared/components/models/detalleventa.interface';

@Component({
  selector: 'app-detalle-detalle-venta',
  templateUrl: './detalle-detalle-venta.component.html',
  styleUrls: ['./detalle-detalle-venta.component.scss']
})
export class DetalleDetalleVentaComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  detalleVenta: detalleVentaI;
  constructor(private router:Router,private api:ServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.detalleVenta = navigation?.extras?.state?.value;
    console.log(this.detalleVenta);
   }

  ngOnInit(): void {
    if(typeof this.detalleVenta == 'undefined'){
      this.router.navigate(['listarDetalleVenta'])
    }
  }
  toEditardetalleVenta():void{
    this.navigationExtras.state.value = this.detalleVenta;
    this.router.navigate(['editarDetalleVenta'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listarDetalleVenta']);
  }

}
