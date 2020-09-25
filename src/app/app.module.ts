import { ComfirmDailogService } from './services/comfirm-dailog.service';
import { AlertMsgService } from './services/alert-msg.service';
import { ToastrModule, ToastrService,ToastContainerModule  } from 'ngx-toastr';
import { ListAuthorComponent } from './modules/author/list-author/list-author.component';
import { EditAuthorComponent } from './modules/author/edit-author/edit-author.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { CreateAuthorComponent } from './modules/author/create-author/create-author.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CreateCategoryBookComponent } from './modules/category-book/create-category-book/create-category-book.component';
import { EditCategoryBookComponent } from './modules/category-book/edit-category-book/edit-category-book.component';
import { ListCategoryBookComponent } from './modules/category-book/list-category-book/list-category-book.component';
import { EditUploadBookComponent } from './modules/upload-book/edit-upload-book/edit-upload-book.component';
import { ListUploadBookComponent } from './modules/upload-book/list-upload-book/list-upload-book.component';
import { CreateUploadBookComponent } from './modules/upload-book/create-upload-book/create-upload-book.component';
import { DetailUserComponent } from './modules/user/detail-user/detail-user.component';
import { ProfileUserComponent } from './modules/user/profile-user/profile-user.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ChangePasswordComponent } from './modules/auth/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,

    // part of user
    CreateUserComponent,
    ListUserComponent,
    EditUserComponent,
    // part of author
    CreateAuthorComponent,
    EditAuthorComponent,
    ListAuthorComponent,
    // part of category
    CreateCategoryBookComponent,
    EditCategoryBookComponent,
    ListCategoryBookComponent,
    // part of upload category
    EditUploadBookComponent,
    ListUploadBookComponent,
    CreateUploadBookComponent,
    DetailUserComponent,
    ProfileUserComponent,
    LoginComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DefaultModule,
    RouterModule,
    // DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SimpleNotificationsModule,
    ImageCropperModule,
    ToastrModule.forRoot({
    }),
    ToastContainerModule,

  ],
  providers:[
    DatePipe,
    AlertMsgService,
    ComfirmDailogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
