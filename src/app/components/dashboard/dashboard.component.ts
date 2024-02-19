import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  header:any
  city: any
  email: any
  age: any
  designation: any
  firstName: any
  empid: any
  gender:any
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

  }
  deleteClick(id:number){
    console.log("deleteClick",id);
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
      'id':1
    }

    this.items.push(payload)
    this.reset();

console.log(payload);

  }
formValidate(){

}

AddEmployee(){
  this.addEmployee = true;
  
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
}
