import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { FormsModule } from '@angular/forms';

// Import Firebase modules + environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  // { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderDetailComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,


  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
