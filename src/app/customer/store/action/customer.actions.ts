import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../models/customer';

export const addCustomer = createAction(
   '[Customer] Load Customers' ,
    ( customer : Customer) => ({ customer })
);

export const deleteCustomer = createAction(
    '[Customer] delete Customers' ,
     ( index : number) => ({ index })
 );
 export const updateCustomer = createAction(
    '[Customer] update Customers' ,
     ( index : number , payload) => ({ index , payload})
 );



