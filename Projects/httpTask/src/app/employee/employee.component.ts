import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employeeServices/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  emp:object=[]

  constructor(private employeeServices:EmployeeService) { }

  ngOnInit(): void {
    this.employeeServices.employee().subscribe(empData=>this.emp=empData);
  }

}
