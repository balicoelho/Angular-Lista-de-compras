import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaComprasService {
  listaCompras: { categoria: string; itens: string[] }[] = [];

  constructor() {}

  addItem(newItem: string, selectedOption: string) {
    // Verificar se o newItem e selectedOption são válidos
    if (newItem && selectedOption) {
      // Encontrar a categoria correspondente na listaCompras
      const categoriaEncontrada = this.listaCompras.find(
        (element) => element.categoria === selectedOption
      );

      // Se a categoria já existe, adicionar o newItem à lista de itens
      if (categoriaEncontrada) {
        categoriaEncontrada.itens.push(newItem);
      } else {
        // Se a categoria não existe, adicionar uma nova categoria com o newItem
        this.listaCompras.push({
          categoria: selectedOption,
          itens: [newItem],
        });
      }

      // Limpar os campos após a adição do item
      newItem = '';
      selectedOption = 'Categoria';
    }
  }

  obterListaCompras() {
    return this.listaCompras;
  }
}
