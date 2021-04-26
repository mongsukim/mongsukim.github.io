import React from "react";
import Header from "../Header";

function Info({text}){
  return <div>{text}</div>
}
const textInfo = [
  {text : "I PROVIDE"},
  {text : "VISUAL CODING"},
  {text : "SOLUTIONS"},
  {text : "FOR YOU WEBS"},
];

function Main() {
  return (
    <div id="wrap">
      <Header/>
      <section id="mainCont">
        <div className="main__cont">
          {textInfo.map( (txt) => (
            <Info text = {txt.text} />
          ))}
      </div>
      </section>
    </div>
  );
}

export default Main;