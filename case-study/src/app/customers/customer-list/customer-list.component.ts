import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../model/icustomer';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  list: ICustomer[];
  p: number = 1;
  name: any;

  constructor(
    private customerService: CustomerService, private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data => {
      this.list = data;
      console.log(this.list);
    });
  }
  getDelete() {
    this.dialog.open(CustomerDeleteComponent);
  }

  search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.list = this.list.filter(res => {
        return res.name?.toLocaleLowerCase().match(this.name?.toLocaleLowerCase().trim());
      });
    }
  }

}
