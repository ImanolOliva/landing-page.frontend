import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dowloadPdf(){
    const pdfUrl = '../../../assets/pdf/programa_konscio_housing.pdf'; // Reemplaza con la URL o ruta relativa de tu PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'programa_konscio_housing.pdf'; // Cambia el nombre del archivo según tus preferencias
    link.click();
  }

}
