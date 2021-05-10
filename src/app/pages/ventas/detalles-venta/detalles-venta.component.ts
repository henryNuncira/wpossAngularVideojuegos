import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { ventaI } from 'src/app/shared/components/models/venta.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles-venta',
  templateUrl: './detalles-venta.component.html',
  styleUrls: ['./detalles-venta.component.scss']
})
export class DetallesVentaComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  venta: ventaI;
  constructor(private router:Router,private api:ServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.venta = navigation?.extras?.state?.value;
    console.log(this.venta);
   }

  ngOnInit(): void {
    if(typeof this.venta == 'undefined'){
      this.router.navigate(['listadoventas'])
    }
  }
  toEditarventa():void{
    this.navigationExtras.state.value = this.venta;
    this.router.navigate(['editarventa'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoventas']);
  }
 toDeleteventa() : void{
    this.api.DeleteVenta(this.venta.idVenta).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoventas']);
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
}

