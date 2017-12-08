import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

  @Input() public mensagem: Object;

  constructor(private _chatService: ChatService) {

   }

   public minhaMensagem(): boolean {

  return  (this.mensagem['author'] === this._chatService.nomeUsuario);

   }


}
