import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  header:any

  ngOnInit(){

  }


    headers = ['Emp ID' , 'Name', 'Designation', 'Age', 'Email', 'City', 'Action']

    items= [{'empid':'E123','firstName':'vijay','designation':'SE','age':'25','email':'vijisnv97@gmail.com','city':'shimoga','id':1},
            {'empid':'E456','firstName':'ajay','designation':'ASE','age':'27','email':'ajay92@gmail.com','city':'Bengaluru','id':2}] 
 

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

}
