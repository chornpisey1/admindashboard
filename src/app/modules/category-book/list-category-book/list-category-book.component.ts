import { ComfirmDailogService } from './../../../services/comfirm-dailog.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryBookService } from './../category-book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryBook } from '../category-book';
import { AlertMsgService } from 'src/app/services/alert-msg.service';

@Component({
  selector: 'app-list-category-book',
  templateUrl: './list-category-book.component.html',
  styleUrls: ['./list-category-book.component.css']
})
export class ListCategoryBookComponent implements OnInit {

  categories: CategoryBook[];
  displayedColumns: String[] = ['no','catename','action'];
  dataSource:  MatTableDataSource<CategoryBook>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private categoryBookService: CategoryBookService,
    private _alertMsg: AlertMsgService,
    private comfirmDailog: ComfirmDailogService,
    ) { }

  refresh(){
    this.categoryBookService.getCategories().subscribe((categories: CategoryBook[]) =>{
      this.categories = categories;
      this.dataSource = new MatTableDataSource(this.categories);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(categories);
    })
  }

  deleteCategory(id){
    let content = "Delete category successfully";
    let title = "Delete"
    this.comfirmDailog.onOpenDailog()
    .afterClosed().subscribe((res) => {
      if(res == true){
        this.categoryBookService.deleteCategory(id).subscribe((category: CategoryBook) =>{
          this._alertMsg.getSuccessSMG(title,content)
            this.refresh();
            // console.log(category);
          })
          ;
      }
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.refresh();
  }

}
