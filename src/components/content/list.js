import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {REMOVE_CUSTOMER} from '../../init/init';

const List = () => {

const list = useSelector(customer => customer.reducer);
const listDark = useSelector((state) => state.themeReducer);
const dispatch = useDispatch();

const removeList = (e) => {
  const {target: {id}} = e;
  dispatch({
    type : REMOVE_CUSTOMER,
    id : id
  })
}
  return ( 
    <div className = "listcustomer">
      {list.map((customer) => 
          <div>
          <li key={customer.id} className = {listDark && "HeaderDark"}>{customer.id}. {customer.name}
          <button onClick={removeList} id={customer.id}>삭제</button>
          </li>
          </div>)}
    </div>
  )
}

export default List;