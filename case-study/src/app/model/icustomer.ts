import {Icustomertype} from './icustomertype';

export interface ICustomer {
  id?: number;
  code?: string;
  name?: string;
  dayOfBirth?: Date;
  gender?: number;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;

  customerType?: Icustomertype;
}
