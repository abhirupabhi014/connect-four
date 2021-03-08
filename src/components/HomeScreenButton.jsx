import React from "react";


import HomeScreenText from "./HomeScreenText"; 

function HomeScreenButton(props){
    
    return <button className = "home-screen-button"  style={{background:props.background}}><HomeScreenText color={props.color} text={props.text} /></button>
   
}
export default HomeScreenButton;  