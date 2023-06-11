import { Component } from '@angular/core';
import Pessoa from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listaPessoas: Pessoa[] = new Array<Pessoa>();

  constructor() {
    this.listaPessoas.push(new Pessoa("Fulano", 23, "DEV .NET"));
    this.listaPessoas.push(new Pessoa("Fulana", 22, "Dev Java"));
    this.listaPessoas.push(new Pessoa("Ciclano", 42, "DEV Android"));
    this.listaPessoas.push(new Pessoa("Ciclana", 30, "Dev Python"));
    this.listaPessoas.push(new Pessoa("Beltrano", 27, "Devops Engineer"));
    this.listaPessoas.push(new Pessoa("Beltrana", 21, "Dev Python"));
  }

  public detalhes(): void {
    alert('teste')
  }
}
