import { AlertMsgService } from 'src/app/services/alert-msg.service';
import { ComfirmDailogService } from './../../../services/comfirm-dailog.service';
import { UploadBookService } from './../upload-book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadBook } from '../upload-book';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-list-upload-book',
  templateUrl: './list-upload-book.component.html',
  styleUrls: ['./list-upload-book.component.css']
})
export class ListUploadBookComponent implements OnInit {

  uploadBooks: UploadBook[];

  constructor(
    private uploadBookService: UploadBookService, 
    public datePipe: DatePipe,
    private _comfirmDailog:ComfirmDailogService,
    private _alert: AlertMsgService
    ) { }

  displayedColumns: string[] = ['no','profile','title', 'price', 'page','action',];
  dataSource: MatTableDataSource<UploadBook>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  refresh(){
    this.uploadBookService.getFileUpload().subscribe((uploadBooks: UploadBook[]) =>{
      this.uploadBooks = uploadBooks;
      this.dataSource = new MatTableDataSource(this.uploadBooks);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.uploadBooks);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteFile(id){
    
    this._comfirmDailog.onOpenDailog()
    .afterClosed().subscribe((res) =>{
      if(res == true){
        this.uploadBookService.deleteFile(id).subscribe((res) => {
          // console.log(res);
          this._alert.getSuccessSMG('Delete','Deleted file successfully');
          this.refresh();
        })
      }
    })
  }

  viewFile(filename){
    this.uploadBookService.viewFile(filename).subscribe((res) =>{
      console.log(res)
    });
  }

  downloadFile(filename){
    this.uploadBookService.downloadFile(filename).subscribe(data => saveAs(data,filename),error => console.error(error));
  }

  ngOnInit(): void {
    this.refresh();
  }

}
