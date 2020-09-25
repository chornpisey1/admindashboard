import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthorService } from './../../author/author.service';
import { CategoryBookService } from './../../category-book/category-book.service';
import { UploadBookService } from './../upload-book.service';
import { UploadBook } from './../upload-book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-upload-book',
  templateUrl: './create-upload-book.component.html',
  styleUrls: ['./create-upload-book.component.css']
})
export class CreateUploadBookComponent implements OnInit {
  uploadBooks: UploadBook[];
  categories: any = null;
  authors: any = null;
  getForm: FormGroup;
  CoverImage: any = '';
  selectedFile: File = null;
  selectedCover: File = null;
  showList: boolean = false;

  constructor(private formBuilder: FormBuilder,private uploadBookService: UploadBookService,private authorService: AuthorService, private categoryBookService: CategoryBookService) { }

  get f(){ return this.getForm.controls}

  ngOnInit(): void {
    this.categoryBookService.getCategories().subscribe((res)=>{
      this.categories = res;
      console.log(res);
    });

    this.authorService.getAuthors().subscribe((res)=>{
      this.authors = res;
    })


    // get data from form upload
    this.getForm = this.formBuilder.group({
      coverimage: [null],
      codebook: ['',Validators.required],
      title: ['',Validators.required],
      subtitle: [''],
      year: [''],
      price: ['', Validators.required],
      category: ['',Validators.required],
      author: ['',Validators.required],
      filename: [null, Validators.required],
      languge: [''],
      page: ['',Validators.required],
      version: ['']
    })
  }

  onUploadFile(event: any){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile.name)
  }

  getCoverImage(event: any) {
    this.selectedCover = <File>event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.selectedCover);
    reader.onload = ( event:any )=> {
      this.CoverImage = reader.result;

      // console.log(reader.result);
    };
    console.log(this.CoverImage)
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }

  onSubmit(form: FormGroup){
    const fd = new FormData();
    fd.append('filename', this.selectedFile, this.selectedFile.name);
    fd.append('codebook', form.get('codebook').value);
    fd.append('title', form.get('title').value);
    fd.append('subtitle', form.get('subtitle').value);
    fd.append('year', form.get('year').value);
    fd.append('price', form.get('price').value);
    fd.append('page', form.get('page').value);
    fd.append('languge', form.get('languge').value);
    fd.append('author', form.get('author').value);
    fd.append('category', form.get('category').value);
    fd.append('version', form.get('version').value);
    fd.append('coverimage', this.CoverImage);
    fd.append('coverimage', this.selectedCover, this.selectedCover.name);

    // new Response(fd).text().then(console.log)
    
    this.uploadBookService.fileUpload(fd).subscribe((res) =>{
      console.log(res);
    });
    this.CoverImage = '';
    this.selectedFile = null;
    this.selectedCover = null;
    this.getForm.reset();
    this.showList = true;
    
  }

  reset(){
    this.getForm.reset();
    this.CoverImage = '';
    this.selectedFile = null;
    this.selectedCover = null;
  }
}
