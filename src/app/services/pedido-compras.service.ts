import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoComprasService {
  private listaComprasUrl = '../data/pedido-compras.json';

  constructor(private http: HttpClient) {}

  getListaCompras(): Observable<any> {
    return this.http.get(this.listaComprasUrl);
  }

  salvarListaCompras(listaCompras: any): Observable<any> {
    return this.http.put(this.listaComprasUrl, listaCompras);
  }
}
