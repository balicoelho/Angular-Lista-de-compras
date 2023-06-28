import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showAddItem: boolean = false;
  opcao: string = 'no';

  showContent() {
    if (this.opcao === 'yes') {
      this.showAddItem = true;
    } else {
      this.showAddItem = false;
    }
  }
}
