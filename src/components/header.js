import React from "react";
import {useSelector} from "react-redux";

const Header = () =>{
  const darkMode = useSelector((state) => state.themeReducer);
  return ( 
    <header>
      <h1 className={darkMode && "HeaderDark"}>고객명단</h1>
    </header>
  )
}

export default Header;