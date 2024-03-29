import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogServiceService } from 'src/app/dialog-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, private snackbar: MatSnackBar, private dialogService: DialogServiceService) { }

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  header: any
  city: any
  email: any
  age: any
  designation: any
  firstName: any
  empid: any
  gender: any
  idCounter: number = 0;
  updatecity: any
  updateage: any
  updatedesignation: any
  updateemail: any
  updatefirstName: any
  updateId: any
  updategender: any
  updaatempId: any
  addEmployee = false;
  selectedItem: any;
  userEmail: any

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail')
  }

  options: string[] = ['Male', 'Female']
  headers = ['Emp ID', 'Name', 'Designation', 'Age', 'Email', 'City', 'Gender', 'Action']
  items: any = [];

  editClick(event: any) {
    console.log("editClick", event);
    this.updateage = event.age
    this.updatecity = event.city
    this.updatedesignation = event.designation
    this.updateemail = event.email
    this.updatefirstName = event.firstName
    this.updateId = event.id
    this.updategender = event.gender
    this.updaatempId = event.empid
    this.selectedItem = { ...event };
    this.sidenav.open()
  }

  deleteClick(index: any) {
    Swal.fire({
      title: 'Are you Sure ?',
      text: 'You will Not Able To Recover This Record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'yes, Delete',
      cancelButtonText: 'No',

    }).then((res) => {
      if (res.value) {
        this.items = this.items.filter((item: { id: any; }) => item.id !== index.id);
        Swal.fire('Deleted', 'your record has been deleted', 'success')
        this.snackbar.open('Deleted succesfully', '', { panelClass: 'snackbar', duration: 3000, verticalPosition: 'top' })
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('cancelled', 'your record is safe')

      }
    })
  }

  Add() {
    let payload = {
      'empid': this.empid,
      'firstName': this.firstName,
      'designation': this.designation,
      'age': this.age,
      'email': this.email,
      'city': this.city,
      'gender': this.gender,
      'id': this.idCounter++,
    }
    this.items.push(payload)
    localStorage.setItem('tableData', JSON.stringify(this.items))
    Swal.fire('Added', 'Employee Added succesfully', 'success')
    this.snackbar.open('Employee Added succesfully', '', { panelClass: 'snackbar', duration: 3000, verticalPosition: 'top' })
    this.reset();
  }

  formValidate() {
    if (this.empid && this.firstName && this.designation && this.age && this.email && this.city && this.gender) {
      return false;
    } else {
      return true;
    }
  }

  formValidate1() {
    if (this.updatefirstName || this.updatedesignation || this.updateage || this.updateemail || this.updatecity) {
      return false;
    } else {
      return true;
    }
  }

  AddEmployee() {
    this.addEmployee = true;
  }

  cancel() {
    this.addEmployee = false;
    this.reset();

  }

  reset() {
    this.empid = ''
    this.firstName = ''
    this.designation = ''
    this.age = ''
    this.email = ''
    this.city = ''
    this.gender = ''
  }

  close() {
    this.sidenav.close()
  }

  submit() {
    // debugger;
    // let payload = {
    //   'firstName': this.updatefirstName,
    //   'designation':this.updatedesignation,
    //   'age':this.updateage,
    //   'email':this.updateemail,
    //   'city':this.updatecity,
    //   'empid': this.updaatempId,
    //   'gender': this.updategender,
    //   'id': this.updateId
    // }

    // const currentRecord = this.items.find((m: { id: any; }) => m.id == this.updateId);
    // if(currentRecord != undefined){
    //   const index = this.items.findIndex((m: { id: any; }) => m.id == this.updateId)
    //   this.items.splice(index,1);
    //   this.items.push(payload);
    // }
    //another approach

    const index = this.items.findIndex((m: { id: any; }) => m.id == this.updateId);
    if (index !== -1) {
      this.items[index].age = this.updateage;
      this.items[index].designation = this.updatedesignation;
      this.items[index].email = this.updateemail;
      this.items[index].city = this.updatecity;
      this.items[index].firstName = this.updatefirstName;
    }
    this.close();
    Swal.fire('Updated', 'Updated succesfully', 'success')
    this.snackbar.open('Updated succesfully', '', { panelClass: 'snackbar', duration: 3000, verticalPosition: 'top' })
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    return emailRegex.test(email);
  }

  logout() {
    this.router.navigate(['/login']);
    Swal.fire('LogedOut', 'Logout succesfully', 'success')
    this.snackbar.open('Logout succesfully', '', { panelClass: 'snackbar', duration: 3000, verticalPosition: 'top' })
    localStorage.clear();
  }
}
