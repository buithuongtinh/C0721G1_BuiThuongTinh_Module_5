import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Division} from '../../model/division';
import {EducationDegree} from '../../model/education-degree';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DivisionService} from '../../service/division.service';
import {EducationDegreeService} from '../../service/education-degree.service';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeObj: Employee = {};
  id: any;
  divisionList: Division[] = [];
  eduDegreeList: EducationDegree[] = [];
  positionList: Position[] = [];

  editForm: FormGroup = new FormGroup({
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
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getDivisionList();
      this.getEduDegreeList();
      this.getPositionList();
      this.employeeService.findById(this.id).subscribe(data => {
        this.employeeObj = data;
        this.editForm.setValue(this.employeeObj);
      });
    });
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

  edit() {
    const customer = this.editForm.value;
    if (this.editForm.valid) {
      this.employeeService.edit(this.id, customer).subscribe(() => {
        alert('Chỉnh sửa thành công');
        this.editForm.reset();
        this.router.navigateByUrl('employee-list');
      }, e => console.log('Lỗi edit employee: ' + e));
    }
  }

}
