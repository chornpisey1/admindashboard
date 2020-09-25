import { CategoryBookService } from './../category-book.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryBook } from './../category-book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-category-book',
  templateUrl: './create-category-book.component.html',
  styleUrls: ['./create-category-book.component.css']
})
export class CreateCategoryBookComponent implements OnInit {

  categorys: CategoryBook[];
  getForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private categoryBookService: CategoryBookService,private router: Router) { }

  ngOnInit(): void {
    this.getForm = this.formBuilder.group({
      catename: ['',Validators.required]
    })
  }

  get f(){ return this.getForm.controls }

  onSubmit(form){
    let title = "Create"
    let content = "Create category successfully"
    console.log(form.value);
    this.categoryBookService.createCategory(form.value).subscribe((category: CategoryBook) =>{
      console.log(category)
    })
    this.router.navigate(['/category/lists'])
    // this.getForm.reset();
  }

}
