import React from "react";
import List from "./content/list";
import {ADD_CUSTOMER} from "../init/init";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Content = () =>{
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.reducer.length);

  const onChange = (e) =>{
  const {target:{value}} = e
  setName(value);
}
const addcustomer = () =>{
  dispatch({
    type : ADD_CUSTOMER,
    name : name,
    id : userid
  })
}
  return (
    <div>
      <input 
        onChange = {onChange}
        value ={name}
        ></input>
      <button onClick={addcustomer}>고객추가</button>
        <List/>
    </div>
  )
}

export default Content;