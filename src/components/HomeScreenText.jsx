import React from "react";
function HomeScreenText(props){
    return <span style={{color:props.color + 'em'}} className=".home-screen-text">{props.text}</span>
}
export default HomeScreenText; 