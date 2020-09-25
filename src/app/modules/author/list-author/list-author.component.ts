import { AuthorService } from './../author.service';
import { Author } from './../author';
import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { AlertMsgService } from 'src/app/services/alert-msg.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  authors: Author[];
  displayedColumns: String[] = ['no','profile','name','national','dob','aob','action'];
  dataSource:  MatTableDataSource<Author>;

  constructor(private authorService: AuthorService,public datePipe: DatePipe,private _alert: AlertMsgService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.authorService.getAuthors().subscribe((authors: Author[]) =>{
      this.authors = authors;
      this.dataSource = new MatTableDataSource(this.authors);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(authors);
    })
  }

  deleteAuthor(id){
    this.authorService.deleteAuthor(id).subscribe((author) =>{
      this.refresh();
      // console.log(author);
      this._alert.getSuccessSMG('Delete','Deleted author successfully');
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}
