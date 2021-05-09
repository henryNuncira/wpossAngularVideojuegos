import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clientesI } from '../shared/components/models/cliente.interface';
import { detalleVentaI } from '../shared/components/models/detalleventa.interface';
import { responseI } from '../shared/components/models/response.interface';
import { ventaI } from '../shared/components/models/venta.interface';
import { VideojuegosI } from '../shared/components/models/videojuegos.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:string = "http://localhost:5000/api/Home/"

  constructor(private http:HttpClient) { }

  //-------------------videos****** crud de la Api....

getAllVideoGame():Observable<VideojuegosI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetVideojuegos";

  return this.http.get<VideojuegosI[]>(direccion,{headers:header});
}
PostNewVideo(video: VideojuegosI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoBodyVideojuego";
    return this.http.post<responseI>(direccion, video, {headers:header});
  }

  PutModifyVideo(idVideoJuego:number, video : VideojuegosI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutVideojuego/"+ idVideoJuego;
  return this.http.put<responseI>(direccion, video, {headers:header});
}
DeleteVideo(idVideoJuego:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteVideo/"+ idVideoJuego;
  return this.http.delete<responseI>(direccion,{headers:header});

}

 //-------------------venta****** crud de la Api....

 getAllVentas():Observable<ventaI[]>
 {
   let header = new HttpHeaders().set('Type-content', 'aplication/json')
   let direccion = this.url + "GetVentaAlquiler";

   return this.http.get<ventaI[]>(direccion,{headers:header});
 }
 PostNewVentas(venta: ventaI[]): Observable<responseI>
   {
     let header = new HttpHeaders().set('Type-content', 'aplication/json')
     let direccion = this.url + "PostNuevoBodyVentaAlquiler";
     return this.http.post<responseI>(direccion, venta, {headers:header});
   }

   PutModifyVenta(idVenta:number, venta : ventaI):Observable<responseI>
  {
   let header = new HttpHeaders().set('Type-content', 'aplication/json')
   let direccion = this.url + "PutVenta/"+ idVenta;
   return this.http.put<responseI>(direccion, venta, {headers:header});
 }
 DeleteVenta(idVenta:number): Observable<responseI>
  {

   let header = new HttpHeaders().set('Type-content', 'aplication/json')
   let direccion = this.url + "DeleteVenta/"+ idVenta;
   return this.http.delete<responseI>(direccion,{headers:header});

 }
  //-------------------Detalle venta****** crud de la Api....

  getAllDetalles():Observable<detalleVentaI[]>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "GetDetalleVenta";

    return this.http.get<detalleVentaI[]>(direccion,{headers:header});
  }
  PostNewDetalle(detalle: detalleVentaI[]): Observable<responseI>
    {
      let header = new HttpHeaders().set('Type-content', 'aplication/json')
      let direccion = this.url + "PostNuevoBodyDetalle";
      return this.http.post<responseI>(direccion, detalle, {headers:header});
    }

    PutModifyDetalle(idDetalle:number, detalle : detalleVentaI):Observable<responseI>
   {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PutDetalleVenta/"+ idDetalle;
    return this.http.put<responseI>(direccion, detalle, {headers:header});
  }
  DeleteDetalle(idDetalle:number): Observable<responseI>
   {

    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "DeleteDetalle/"+ idDetalle;
    return this.http.delete<responseI>(direccion,{headers:header});

  }

  GetListarVentaDia():Observable<detalleVentaI[]>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "GetListarVentaDia";

    return this.http.get<detalleVentaI[]>(direccion,{headers:header});
  }
   //-------------------clientes****** crud de la Api....

getAllClientes():Observable<clientesI[]>
{
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "GetClientes";

  return this.http.get<clientesI[]>(direccion,{headers:header});
}
PostNewCliente(cliente: clientesI[]): Observable<responseI>
  {
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "PostNuevoBodyCliente";
    return this.http.post<responseI>(direccion, cliente, {headers:header});
  }

  PutModifyCliente(idCliente:number, cliente : clientesI):Observable<responseI>
 {
  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "PutCliente/"+ idCliente;
  return this.http.put<responseI>(direccion, cliente, {headers:header});
}
DeleteCliente(idCliente:number): Observable<responseI>
 {

  let header = new HttpHeaders().set('Type-content', 'aplication/json')
  let direccion = this.url + "DeleteCliente/"+ idCliente;
  return this.http.delete<responseI>(direccion,{headers:header});

}
}
