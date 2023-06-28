import { Component } from '@angular/core';
import * as categorias from '../data/categorias.json';
import { ListaComprasService } from 'src/app/services/lista-compras.service';

@Component({
  selector: 'app-inclusao',
  templateUrl: './inclusao.component.html',
  styleUrls: ['./inclusao.component.css'],
})
export class InclusaoComponent {
  categorias = (categorias as any).default;
  newItem: string = '';
  selectedOption: string = 'Categoria';

  constructor(private listaComprasService: ListaComprasService) {}

  order() {
    this.categorias.sort();
  }

  addItem() {
    this.listaComprasService.addItem(this.newItem, this.selectedOption);
    this.newItem = '';
    this.selectedOption = 'Categoria';
  }
}
