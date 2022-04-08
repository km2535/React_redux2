import React from 'react';
import {DARK_MODE} from "../init/init";
import {useDispatch, useSelector} from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();
  const btnDark = useSelector((state) => state.themeReducer);
  const darkMode = () =>{
    dispatch({
      type: DARK_MODE
    })
  }
  return (
    <footer className="footer">
      <div>
        {btnDark ? <button onClick={darkMode}>주간모드</button> : 
          <button onClick={darkMode}>다크모드</button>
        }
        
      </div>
    </footer>
  )
}
export default Footer;