import { ComfirmDailogService } from './../../../services/comfirm-dailog.service';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DatePipe,DOCUMENT } from '@angular/common';
import { AlertMsgService } from 'src/app/services/alert-msg.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];

  displayedColumns: string[] = ['no','profile','username', 'email', 'phone','position','date','action',];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private userService: UserService,
    public datePipe: DatePipe,
    private router: Router,
    private _alert: AlertMsgService,
    private _comfirmDailog:ComfirmDailogService
    ) {
  }

  ngOnInit(): void {
    console.log('hlelpo')
    // select all users this.userService.getUsers().subscribe((users: User[]) =>{

    this.refresh();
    // console.log(this.datePipe.transform(Date(),"yyyy-MM-dd"))
  }
  deleteOneUser(id){
    
    this._comfirmDailog.onOpenDailog()
    .afterClosed().subscribe((res) =>{
      if(res == true){
        this.userService.deleteOneUser(id).subscribe((user: User) =>{
          // console.log(user);
          this._alert.getSuccessSMG('Delete','Deleted user successfully')
          this.refresh();
        })
      }
    })
  }

  refresh(){
    this.userService.getUsers().subscribe(async(users: User[]) =>{

     this.dataSource = await new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // await this.document.location.reload();
       console.log(users)
    },error => {
      console.log(error)
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

