// 이 리듀서에 관리되는 상태드들이 존재해야함
import {DARK_MODE} from "../init/init";

const initailize = false;

function reducer (state = initailize, action){
  
  switch(action.type){

    case DARK_MODE :
      return !state

    default : 
    return state;
  }
}

export default reducer;
