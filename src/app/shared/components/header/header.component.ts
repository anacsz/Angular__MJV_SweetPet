import { ModalLoginComponent } from './../modal-login/modal-login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAtendimentoComponent } from '../modal-atendimento/modal-atendimento.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  login():void{
    const dialogoRef = this.dialog.open(ModalLoginComponent,{
      width: '250px',
    });

    dialogoRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    });
  }

  atendimento():void{
    const dialogoRef = this.dialog.open(ModalAtendimentoComponent,{
      width: '280px',
    });

    dialogoRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed');
    });
  }

}
