import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',redirectTo:'cart',pathMatch:'full'},
  {path: 'editProfile',component:EditProfileComponent,title: 'edit profile',},
  {path: 'Login',component:LoginComponent,title: 'login',},
  {path: 'viewProfile',component:ViewProfileComponent,title: 'viewprofile',},
  ];
@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
