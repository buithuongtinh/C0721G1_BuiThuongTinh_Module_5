import {Component, OnInit} from '@angular/core';
import {EducationDegree} from '../../model/education-degree';
import {Division} from '../../model/division';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DivisionService} from '../../service/division.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  divisionList: Division[] = [];
  eduDegreeList: EducationDegree[] = [];
  positionList: Position[] = [];


  createForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9,11}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^((090)|(091)|(\\(84\\)\\+90)|(\\(84\\)\\+91))\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$')]),
    address: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),

    division: new FormControl(''),
    position: new FormControl(''),
    eduDegree: new FormControl('')

  });

  constructor(
    private divisionService: DivisionService,
    private eduDegreeService: EducationDegreeService,
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private router: Router,
  ) {
    this.getDivisionList();
    this.getEduDegreeList();
    this.getPositionList();
  }

  ngOnInit(): void {
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


  create() {
    const employee = this.createForm.value;
    if (this.createForm.valid) {
      this.employeeService.createNew(employee).subscribe(() => {
        alert('Tạo thành công');
        this.createForm.reset();
        this.router.navigateByUrl('employee-list');
      }, e => console.log('Lỗi create Employee: ' + e));
    }
  }
}
