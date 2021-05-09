import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { clientesI } from 'src/app/shared/components/models/cliente.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.scss']
})
export class ListadoClienteComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
 listadoClientes : clientesI[];
 cliente:clientesI;


  constructor(http: HttpClient ,private api:ServiceService,private router:Router) {}

  ngOnInit(): void {
    this.getAllClientes();
  }


 public getAllClientes(){

  this.api.getAllClientes().subscribe(resp =>
    {
      this.listadoClientes= resp;
      console.log(this.listadoClientes);

    },error => console.error(error)); //mostar un mensaje agradable al cliente(html)

}

  toEditarCliente(clienteEdi:any):void{
    this.navigationExtras.state.value = clienteEdi;
    this.router.navigate(['editarClientes'], this.navigationExtras)
  }
  toVerCliente(clienteVer:any):void{
    this.navigationExtras.state.value = clienteVer;
    this.router.navigate(['detalleClientes'], this.navigationExtras);
  }

  toDeleteCliente(idCliente:number) : void{
    this.api.DeleteCliente(idCliente).subscribe(resp=>{


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
    this.router.navigate(['listadoClientes'])
  }
  toNuevoCliente():void{
    this.router.navigate(['nuevoClientes'])
  }
}


