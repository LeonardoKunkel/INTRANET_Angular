import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { UserComponent } from './pages/user/user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    AddComponent,
    HomeComponent,
    SearchComponent,
    ListComponent,
    UserComponent,
    UserCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class UsersModule { }
