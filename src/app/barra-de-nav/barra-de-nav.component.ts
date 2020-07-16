import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-de-nav',
  templateUrl: './barra-de-nav.component.html',
  styleUrls: ['./barra-de-nav.component.css']
})
export class BarraDeNavComponent implements OnInit {
  contCarrito=0;
  contSugerencias=0;
  contVerProductos=0;
  contBuscar=0;
  contIniciar=0;
  constructor() { }

  ngOnInit() {
  }
  click_Carrito(){
  this.contCarrito++;
  console.log(this.contCarrito);
  

}
click_Sugerencias(){
  this.contSugerencias++;
  console.log(this.contSugerencias);

}
click_VerProducto(){
  this.contVerProductos++;
  console.log(this.contVerProductos);
}
click_Buscar(){
  this.contBuscar++;
  console.log(this.contBuscar);
}
click_Iniciar(){
  this.contIniciar++;
  console.log(this.contIniciar);
}
}
