import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthorService } from './../author.service';
import { Author } from './../author';
import { Component, OnInit } from '@angular/core';
import { AlertMsgService } from 'src/app/services/alert-msg.service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  authors: Author[];
  croppedImageProfile: any = '';
  croppedImage: any = '';
  imageChangedEvent: any = '';
  selectedFile: File = null;
  getForm: FormGroup;
  hide: boolean = true;
  submitted: boolean = false;

  constructor(private authorService: AuthorService, private formBuilder: FormBuilder, private router: Router,private _alert: AlertMsgService) { }

  ngOnInit(): void {
    this.refresh();
    this.getForm = this.formBuilder.group({
      name: ['',Validators.required],
      dob: [''],
      aob: [''],
      profile: [''],
      national: [''],
    })
  }

  refresh(){
    this.authorService.getAuthors().subscribe((authors: Author[]) =>{
      this.authors = authors;
      console.log(authors)
    })
  }

  get f(){return this.getForm.controls}

  // submit form
  onSubmit(form){
    form.get('profile').setValue(this.croppedImageProfile);
    // console.log(form.get('profile').value)
    if(form.get('name').invalid){
      this.submitted = true;
    }else{
      this.authorService.createAuthor(form.value).subscribe((author) =>{
        console.log(author)
        this.croppedImageProfile = '';
        this.getForm.reset();
        this._alert.getSuccessSMG('Create','Created author successfully');
        this.router.navigate(['/author/lists'])
      },(error) =>{
        console.log(error)
      })

    }
  }

  // crop and upload image to database
  fileChangeEvent(event: any): void {
    this.croppedImage = '';
    this.selectedFile = <File>event.target.files[0];

    if(this.selectedFile.name){  // change today
      (<HTMLElement>document.getElementsByClassName('btn-upload-image')[0]).click()
    }
    this.imageChangedEvent = event;
    // console.log(this.selectedFile.name)
  }



  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      // console.log(event, base64ToFile(event.base64))
      // console.log(event.base64)

  }
  cropImage(){
    this.croppedImageProfile = this.croppedImage;
    // this.userUploadService.fileUpload(this.croppedImageProfile);
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
