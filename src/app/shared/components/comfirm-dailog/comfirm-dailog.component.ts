import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-comfirm-dailog',
  templateUrl: './comfirm-dailog.component.html',
  styleUrls: ['./comfirm-dailog.component.css']
})
export class ComfirmDailogComponent implements OnInit {

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data,
    private dailogRef: MatDialogRef<ComfirmDailogComponent>,

    ) { }

  ngOnInit(): void {
  }

  closeDailog(){
    this.dailogRef.close(false);
  }

}
