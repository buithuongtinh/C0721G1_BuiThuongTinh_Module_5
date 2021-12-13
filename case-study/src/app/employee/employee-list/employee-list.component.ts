import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Division} from '../../model/division';
import {EducationDegree} from '../../model/education-degree';
import {DivisionService} from '../../service/division.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[] = [];

  divisionList: Division[] = [];

  eduDegreeList: EducationDegree[] = [];

  positionList: Position[] = [];

  p: number = 1;
  name: any;

  constructor(
    private divisionService: DivisionService,
    private eduDegreeService: EducationDegreeService,
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private matDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getDivisionList();
    this.getEduDegreeList();
    this.getPositionList();
    this.getAllList();

  }

  search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.employeeList = this.employeeList.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim());
      });
    }
  }

  getAllList() {
    this.employeeService.getAll().subscribe(employees => {
      this.employeeList = employees;
    }, error => {
      console.log('List is Empty');
    });
  }

  getDivisionList() {
    this.divisionService.getAll().subscribe(responseList => {
      this.divisionList = responseList;
    });
  }

  getEduDegreeList() {
    this.eduDegreeService.getAll().subscribe(responseList => {
      this.eduDegreeList = responseList;
    });
  }

  getPositionList() {
    this.positionService.getAll().subscribe(responseList => {
      this.positionList = responseList;
    });
  }

  opeDialog(id,name): void {
    const dialogRef = this.matDialog.open(EmployeeDeleteComponent, {
      width: '500px',
      data: {name: name,
        id: id
      },
    });
    dialogRef.afterClosed().subscribe(result => {

      if(result == 'true'){
        this.employeeService.delete(id).subscribe();
        window.location.reload();
      }
      console.log('The dialog was closed');

    });
  }

}


