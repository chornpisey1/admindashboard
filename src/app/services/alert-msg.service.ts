import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertMsgService {

  constructor(private toastrService: ToastrService) { }


  getSuccessSMG(title?: string, content?: string) {
    this.toastrService.success((title) ? title : 'Success', (content) ? content : 'All good!', {
      timeOut: 2000,
      progressBar: true,
      closeButton: true,
      progressAnimation: "increasing",
      enableHtml: true
    });

  }

  getErrorSMG(title?: string, content?: string) {
    this.toastrService.error((title) ? title : 'Error', (content) ? content : 'Something went wrong!', {
      timeOut: 5000,
      progressAnimation: 'increasing',
      progressBar: true,
      closeButton: true,
      enableHtml: true
    });
  }
}
