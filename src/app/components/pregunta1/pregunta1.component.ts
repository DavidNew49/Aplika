import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta1',
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component implements OnInit {

  constructor() { }

  resultado: any[] = [];

  manejaFluidosPeligrosos: string ="No";
  infraestructuraManejaPresionesCriticas: string ="No";
  sistemaOperaPresionesMayorA150psig: string ="No";
  temperaturaDelSistemaMayorA120f: string ="No";
  temperaturaDelSistemaMenorA0f: string ="No";
  sistemaPresentaFuga: string ="Si";
  riesgo: string ="Bajo";



  ngOnInit(): void {
  }

  verificar():any{
    if(this.manejaFluidosPeligrosos == "Si" || this.infraestructuraManejaPresionesCriticas == "Si")
    return "Alto";
  }

  fin(){
    if(this.resultado ){

    }
  }
    
}
