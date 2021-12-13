import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomer} from '../../model/icustomer';
import {Icustomertype} from '../../model/icustomertype';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CusTypeService} from '../../service/cus-type.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerObj: ICustomer = {};
  id: any;
  cusTypeList: Icustomertype[] = [];
  editForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    code: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
    name: new FormControl('', [Validators.required]),
    dayOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('0', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9,11}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^((090)|(091)|(\\(84\\)\\+90)|(\\(84\\)\\+91))\\d{7}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]+@[a-zA-Z]+(\\.[a-zA-Z]+){1,3}$')]),
    address: new FormControl('', Validators.required),

    customerType: new FormControl('')
  });

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private cusTypeService: CusTypeService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(paramMap.get('id'));
      this.getCusTypeList();
      this.customerService.findById(this.id).subscribe(data => {
        this.customerObj = data;
        this.editForm.setValue(this.customerObj);
      });
    });
  }

  ngOnInit(): void {
  }

  getCusTypeList() {
    this.cusTypeService.getAll().subscribe(data => {
      this.cusTypeList = data;
    }, error => {
      alert('Please try again');
    });
  }

  edit() {
    const customer = this.editForm.value;
    if (this.editForm.valid) {
      this.customerService.edit(this.id, customer).subscribe(() => {
        alert('Chỉnh sửa thành công');
        this.editForm.reset();
        this.router.navigateByUrl('customer');
      }, e => console.log('Lỗi edit Customer: ' + e));
    }
  }

}
