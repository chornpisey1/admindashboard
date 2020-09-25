import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertMsgService } from 'src/app/services/alert-msg.service';
import { CategoryBook } from '../category-book';
import { CategoryBookService } from '../category-book.service';
ActivatedRoute
@Component({
  selector: 'app-edit-category-book',
  templateUrl: './edit-category-book.component.html',
  styleUrls: ['./edit-category-book.component.css']
})
export class EditCategoryBookComponent implements OnInit {

  cateID:String;
  categroyBook: CategoryBook[]
  selectedCate: CategoryBook = { catename:null }
  constructor(private categoryBookService: CategoryBookService, private alertMsgService: AlertMsgService,private actRoute: ActivatedRoute,private router:Router) {
    this.cateID = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.categoryBookService.getOneCatory(this.cateID).subscribe((category: CategoryBook) =>{
      this.selectedCate = category;
      // console.log(this.selectedCate);
    })
  }

  onSubmit(form){
    // console.log(form.value)
    let title = "Update"
    let content = "Updated category successfully"
    this.categoryBookService.updateCategory(this.cateID,form.value).subscribe((res) =>{
      this.alertMsgService.getSuccessSMG(title,content)
      this.router.navigate(['/category/lists'])
      // console.log(res);
    })

  }

}
