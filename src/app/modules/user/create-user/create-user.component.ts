import { UserService } from './../user.service';
import { User } from '../user.model';
import { Component, OnInit,Inject } from '@angular/core';
import {FormControl,FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent,base64ToFile } from 'ngx-image-cropper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertMsgService } from 'src/app/services/alert-msg.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  users: User[];
  getForm: FormGroup;
  selectedFile: File = null;
  submitted: boolean;
  hide: boolean = true;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageProfile: any = '';
  showBtnList: boolean = false;

  constructor(private formBuilder:FormBuilder,private router: Router,private userService: UserService, public dialog: MatDialog,private _alert: AlertMsgService) {
  }


  get f() { return this.getForm.controls; }

  onSubmit(form){
    // console.log('this is profile'+this.getForm.get('profile').value)
    // console.log(this.croppedImageProfile)

    form.get('profile').setValue(this.croppedImageProfile);
    console.log(form.value)
    if (form.invalid) {
      this.submitted = true;
    }else{
      // console.log(form.value)
      let title = "Create"
      let content = "Created user successfully"
      this.userService.postUser(form.value).subscribe((user: User) =>{
        // console.log(user);
        this.croppedImageProfile = '';
        this.showBtnList = true;
        this._alert.getSuccessSMG(title,content);
        this.router.navigate(['/user/lists'])
        // this.getForm.reset();
      })
    }
    // console.log(this.getForm.get('username').invalid)
  }


  refresh(){
    this.userService.getUsers().subscribe((users: User[]) =>{
      this.users = users;
      // console.log(users);
    })
  }

  ngOnInit(): void {
    this.refresh();
    // get data from create form
    this.getForm = this.formBuilder.group ({
      username:['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      position: ['',Validators.required],
      phone: ['',Validators.required],
      password: ['',Validators.required],
      address: [''],
      profile: [''],
    });
  }



  getErrorMessage() {
    if (this.getForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }
    return this.getForm.get('email').hasError('email') ? 'Not a valid email' : '';
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

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialogData.html',
})
export class DialogDataExampleDialog {
  constructor() {}
}
