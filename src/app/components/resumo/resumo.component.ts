import { Component } from '@angular/core';
import { ListaComprasService } from 'src/app/services/lista-compras.service';
import { PedidoComprasService } from 'src/app/services/pedido-compras.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
})
export class ResumoComponent {
  listaCompras: { categoria: string; itens: string[] }[] = [
    {
      categoria: '',
      itens: [],
    },
  ];

  constructor(
    private listaComprasService: ListaComprasService,
    private pedidoComprasService: PedidoComprasService
  ) {
    this.listaCompras = this.listaComprasService.obterListaCompras();
  }

  removeItem(elemento: any, item: string) {
    const categoriaEncontrada: any = this.listaCompras.find(
      (elem) => elem.categoria === elemento.categoria
    );

    if (categoriaEncontrada) {
      categoriaEncontrada.itens.splice(
        categoriaEncontrada.itens.indexOf(item),
        1
      );
    }

    if (categoriaEncontrada.itens.length === 0) {
      this.listaCompras.splice(
        this.listaCompras.indexOf(categoriaEncontrada),
        1
      );
    }
  }

  salvarLista() {
    this.pedidoComprasService.salvarListaCompras(this.listaCompras).subscribe(
      () => {
        console.log('Lista de compras salva com sucesso!');
      },
      (error) => {
        console.error('Erro ao salvar a lista de compras:', error);
      }
    );
  }
}
