import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { VideojuegosI } from 'src/app/shared/components/models/videojuegos.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }
  }
  videoJuegos : VideojuegosI;
  constructor(private router:Router,private api:ServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.videoJuegos = navigation?.extras?.state?.value;

   }

  ngOnInit(): void {
    if(typeof this.videoJuegos == 'undefined'){
      this.router.navigate(['list'])
    }
  }
  toEditarVideoJuego():void{
    this.navigationExtras.state.value = this.videoJuegos;
    this.router.navigate(['editar'], this.navigationExtras);
  }

  toList():void{
    this.router.navigate(['list']);
  }
 toDeleteVideoJuego() : void{
    this.api.DeleteVideo(this.videoJuegos.idVideoJuego).subscribe(resp=>{
      // this.estado=resp.state;
      // this.message=resp.message;
      console.log(resp);
      this.router.navigate(['list']);
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
