// 이 리듀서에 관리되는 상태드들이 존재해야함
import {ADD_CUSTOMER, REMOVE_CUSTOMER} from "../init/init";

const initailize = []

function reducer (state = initailize, action){
  switch(action.type){
    
    case ADD_CUSTOMER : 
    if(action.name.length ===0){ 
      return [...state];
    }else{
      return [...state, {id:action.id+1, name : action.name}];
    }

    case REMOVE_CUSTOMER : 
      return [...state].filter((v) => v.id != action.id);

    default : 
    return state;
  }
}

export default reducer;
