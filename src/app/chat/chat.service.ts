import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private usuario = '';
  private logTime: Date;
  private serverURL = 'http://172.24.30.24:3000';
  public server: any;

  get nomeUsuario(): string {
    return this.usuario;
  }

  get loggedTime(): Date {
    return this.logTime;
  }

  constructor() {
    if (!localStorage.getItem('nome')) {
      this.usuario = prompt('Qual é o seu nome ?');

    } else {
      this.usuario = localStorage.getItem('nome');
    }

    this.logTime = new Date();
    localStorage.setItem('nome', this.usuario);

    this.server = io(this.serverURL);
  }
}
