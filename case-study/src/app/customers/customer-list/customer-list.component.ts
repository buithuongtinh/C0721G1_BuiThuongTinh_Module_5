import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {ICustomer} from '../../model/icustomer';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeDeleteComponent} from '../../employee/employee-delete/employee-delete.component';

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
    private customerService: CustomerService,
    private matDialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(data => {
      this.list = data;
      console.log(this.list);
    });
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

  openDialog(id, name): void {
    const dialogRef = this.matDialog.open(EmployeeDeleteComponent, {
      width: '500px',
      data: {
        name: name,
        id: id
      },
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result == 'true') {
        this.customerService.delete(id).subscribe();
        window.location.reload();
      }
      console.log('The dialog was closed');

      // this.animal = result;
    });
  }

}
