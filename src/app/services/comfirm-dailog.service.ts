import { ComfirmDailogComponent } from './../shared/components/comfirm-dailog/comfirm-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComfirmDailogService {

  constructor( private matDialog: MatDialog) { }

  onOpenDailog(){
    return this.matDialog.open(ComfirmDailogComponent,{
      width: '35%',
      // disableClose: true
      // data: {
      //   message: msg
      // }
    })
  }
}
