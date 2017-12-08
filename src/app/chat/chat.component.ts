import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {


  public mensagens: Object[] = [];
  public mensagemInserir: string;

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {
    this._chatService.server.on('messages', m =>  this.mensagens.push(m));
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  public enviaMensagem(): void {
    const obj = {message: this.mensagemInserir, author: this._chatService.nomeUsuario};

    this._chatService.server.emit('messages', obj);
    this.mensagemInserir = '';
  }
  public apaga(): void {
    this.mensagens = [];
  }

}
