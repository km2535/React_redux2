import React from "react";
import "./style.css";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import {useSelector} from "react-redux";

export default function App() {
  const background = useSelector((state)=>state.themeReducer)

  return (
    <div id="app" className={background && "darkmode"}>
      <Header/>
      <Content/> 
      <Footer/>
    </div>
  );
}
