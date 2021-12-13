import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Division} from '../../model/division';
import {EducationDegree} from '../../model/education-degree';
import {DivisionService} from '../../service/division.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';

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

}
