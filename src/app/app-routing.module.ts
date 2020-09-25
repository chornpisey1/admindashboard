import { ProfileUserComponent } from './modules/user/profile-user/profile-user.component';
import { DetailUserComponent } from './modules/user/detail-user/detail-user.component';
import { ListUploadBookComponent } from './modules/upload-book/list-upload-book/list-upload-book.component';
import { EditUploadBookComponent } from './modules/upload-book/edit-upload-book/edit-upload-book.component';
import { CreateUploadBookComponent } from './modules/upload-book/create-upload-book/create-upload-book.component';
import { ListCategoryBookComponent } from './modules/category-book/list-category-book/list-category-book.component';
import { EditCategoryBookComponent } from './modules/category-book/edit-category-book/edit-category-book.component';
import { CreateCategoryBookComponent } from './modules/category-book/create-category-book/create-category-book.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { ListUserComponent } from './modules/user/list-user/list-user.component';
import { ListAuthorComponent } from './modules/author/list-author/list-author.component';
import { EditAuthorComponent } from './modules/author/edit-author/edit-author.component';
import { CreateAuthorComponent } from './modules/author/create-author/create-author.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';


const routes: Routes = [
  { path: '',  component: DefaultComponent,
  children:
   [
    { path: '', component: DashboardComponent },
    // part of author
    { path: 'author/create', component: CreateAuthorComponent },
    { path: 'author/edit/:id', component: EditAuthorComponent },
    { path: 'author/lists', component: ListAuthorComponent },

    // part of users
    { path: 'user/create', component: CreateUserComponent },
    { path: 'user/edit/:id', component: EditUserComponent },
    { path: 'user/lists', component: ListUserComponent },
    { path: 'user/profile', component: ProfileUserComponent },
    { path: 'user/detail', component: DetailUserComponent },

    // part of category of book
    { path: 'category/create', component: CreateCategoryBookComponent },
    { path: 'category/edit/:id', component: EditCategoryBookComponent },
    { path: 'category/lists', component: ListCategoryBookComponent },

    // path of upload book
    { path: 'upload-book/upload', component: CreateUploadBookComponent },
    { path: 'upload-book/edit/:id', component: EditUploadBookComponent },
    { path: 'upload-book/lists', component: ListUploadBookComponent },
    // page not found
    { path: '**', component: PageNotFoundComponent },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
