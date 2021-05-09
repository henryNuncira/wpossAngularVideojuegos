import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { clientesI } from 'src/app/shared/components/models/cliente.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss']
})
export class DetalleClienteComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  cliente: clientesI;
  constructor(private router:Router,private api:ServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras?.state?.value;
    console.log(this.cliente);
   }

  ngOnInit(): void {
    if(typeof this.cliente == 'undefined'){
      this.router.navigate(['listadoClientes'])
    }
  }
  toEditarCliente():void{
    this.navigationExtras.state.value = this.cliente;
    this.router.navigate(['editarClientes'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['listadoClientes']);
  }
 toDeleteCliente() : void{
    this.api.DeleteCliente(this.cliente.idCliente).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['listadoClientes']);
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

