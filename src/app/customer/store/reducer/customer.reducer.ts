import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.actions';
import { Customer } from '../../../models/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers: [],
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomer, (state: CustomerState, { customer }) => ({
    ...state,
    customers: [...state.customers, customer],
  })),
  on(CustomerActions.deleteCustomer, (state: CustomerState, { index }) => ({
    ...state,
    customers: [...state.customers.filter((item, i) => i !== index)],
  })),
  on(CustomerActions.updateCustomer, (state: CustomerState, { index, payload }) => ({
    ...state,
    customers: getupdatedvalue(state, index, payload),
  }))
);
function getupdatedvalue(state:any, i:number , val :any) { 
  const newObj = [...state.customers]; 
  var k = JSON.parse(JSON.stringify(newObj[i]));
  k.name = val;
  newObj[i] = k;
  return [...newObj];
  

}
export function reducer(state: CustomerState | undefined, action: Action): any {
  return customerReducer(state, action);
}
