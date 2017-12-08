import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  public users;



  constructor(private _connectionService: ConnectionService) { }



  ngOnInit() {
    this._connectionService.getUsers().subscribe(
      res => this.users = res, err => console.log(err)
    );
  }

}
