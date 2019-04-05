import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  NotificacionExito(title: string, message?: string, tiempo?: number) {
    this.toastr.success(title , message, {
      timeOut: tiempo
    });
  }
  NotificacionAdvertencia(title: string, message?: string, tiempo?: number) {
    this.toastr.warning(title , message, {
      timeOut: tiempo
    });
  }
  NotificacionError(title: string, message?: string, tiempo?: number) {
    this.toastr.error(title , message, {
      timeOut: tiempo
    });
  }
}
