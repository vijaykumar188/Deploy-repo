import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  header:any
  city: any
  email: any
  age: any
  designation: any
  firstName: any
  empid: any
  gender:any
  idCounter: number = 1;
  updatecity: any
  updateage: any
  updatedesignation: any
  updateemail: any
  updatefirstName: any
  addEmployee=false;


  ngOnInit(){

  }


    headers = ['Emp ID' , 'Name', 'Designation', 'Age', 'Email', 'City', 'Gender','Action']

    items:any = []; 
 

  getTableData(){
    // this.tableData.items = [
    //   {
    //     'empid':'E123'
    //   }
    // ]
  }

  editClick(id:number){
  console.log("editClick",id);

  this.sidenav.open()
  
  }
  deleteClick(index:any){
    console.log("deleteClick",index);
    this.items = this.items.filter((item: { id: any; }) => item.id !== index.id);
  }

  Add(){

    let payload = {
      'empid': this.empid,
      'firstName': this.firstName,
      'designation':this.designation,
      'age':this.age,
      'email':this.email,
      'city':this.city,
      'gender':this.gender,
      'id': this.idCounter++,
    }
   

    this.items.push(payload)
    this.reset();

console.log(payload);

  }
formValidate(){
  if(this.empid && this.firstName && this.designation && this.age && this.email && this.city && this.gender){
    return false;
  }else{
    return true;
  }

}
formValidate1(){
  if( this.updatefirstName && this.updatedesignation && this.updateage && this.updateemail && this.updatecity){
    return false;
  }else{
    return true;
  }

}

AddEmployee(){
  this.addEmployee = true;
  this.sidenav.open()
}

cancel(){
  this.addEmployee = false;
  this.reset();
  
}

reset(){
  this.empid=''
  this.firstName=''
  this.designation=''
  this.age=''
  this.email =''
  this.city = ''
  this.gender=''
}
close(){
  this.sidenav.close()
}
submit(){

}
options:string[] = ['Male','Female']
}
