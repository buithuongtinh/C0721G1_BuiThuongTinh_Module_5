import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../../model/icustomer';
import {CustomerService} from '../../service/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Icustomertype} from '../../model/icustomertype';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  list: Icustomertype[];
  customerForm: FormGroup = new FormGroup({
    code: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(KH-)[\\d]{4}$')])),
    name: new FormControl('', Validators.compose([Validators.required])),
    dayOfBirth: new FormControl('', Validators.compose([Validators.required])),
    gender: new FormControl('', Validators.compose([Validators.required])),
    idCard: new FormControl('', Validators.compose([Validators.required])),
    phone: new FormControl('', Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    address: new FormControl('', Validators.compose([Validators.required])),
    customerType: new FormControl('', Validators.compose([Validators.required])),
  });

  constructor(
    private customerService: CustomerService,
    private router: Router, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerTypes().subscribe(data => {
      this.list = data;
      console.log(this.list);
    });
  }

  onCreate() {
    if (this.customerForm.valid) {
      this.customerService.createCustomer(this.customerForm.value).subscribe(data => {
        // alert('thanh cong');
        this.router.navigateByUrl('/customer');
        this.snackbar.open('thêm mới thành công');
      }, error => {
        // alert('that bai');
        console.log(error.message);
      });
    }
  }

}
