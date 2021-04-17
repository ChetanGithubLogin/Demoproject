import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../../models/customer';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../store/selector/customer.selectors';
import {CustomerState} from '../store/reducer/customer.reducer';
import {deleteCustomer,updateCustomer} from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
   }

  ngOnInit(): void {
  }

  deleteCustomer(index:number){
    this.store.dispatch(deleteCustomer(index));
  }
  updateCustomer(index:number, name :string){
    this.store.dispatch(updateCustomer( index ,name));
  }

}
