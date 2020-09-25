import { UserService } from './../user.service';
import { User } from '../user.model';
import { Component, OnInit,Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ActivatedRoute,Router  } from '@angular/router';
import { AlertMsgService } from 'src/app/services/alert-msg.service';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userID: String;
  submited: boolean;
  hide: boolean = true;
  croppedImage: any = '';
  imageChangedEvent: any = '';
  croppedImageProfile: any = '';
  selectedFile: File;
  users: User[];
  changeImg: boolean = false;

  selectedUser: User = {_id:null,username: null,email: null, address: null,password: null,phone: null,status: null,position: null,profile: null};

  constructor(private userService: UserService, private actRoute: ActivatedRoute, private router: Router,private _alert: AlertMsgService) {
    this.userID = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    // console.log(this.userID)
    this.userService.getOneUser(this.userID).subscribe((user: User) =>{
      this.selectedUser = user;
      this.croppedImageProfile = "http://localhost:9000/profile/"+this.selectedUser.profile;
      // console.log(user)
    })
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

  onSubmit(form){
    if(this.changeImg){
      form.value.profile = this.croppedImageProfile;
    }else{
      form.value.profile = this.selectedUser.profile;
    }

    this.userService.updateOneUser(this.userID,form.value).subscribe((user: User) =>{
      this._alert.getSuccessSMG('Edit','Edited user successfully');
      this.router.navigate(['/user/lists']);
    })

  }


  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
      // console.log(event, base64ToFile(event.base64))
      // console.log(event.base64)

  }
  cropImage(){
    this.changeImg = true;
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
