import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/servicios/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  tipoNotificacion = 'Exito';
  titleNot = 'Hola!';
  mensajeNot = 'Este es el mensaje de exito';
  tiempo = '5000';

  constructor( private notificationService: NotificationService ) { }

  ngOnInit() {
  }

  Execnotificacion() {
    if ( this.tipoNotificacion === 'Exito') {
      this.notificationService.NotificacionExito(this.mensajeNot, this.titleNot , parseInt(this.tiempo, 10));
    } else if ( this.tipoNotificacion === 'Advertencia') {
      this.notificationService.NotificacionAdvertencia(this.mensajeNot, this.titleNot , parseInt(this.tiempo, 10));
    } else if ( this.tipoNotificacion === 'Error') {
      this.notificationService.NotificacionError(this.mensajeNot, this.titleNot , parseInt(this.tiempo, 10));
    }
  }


}

