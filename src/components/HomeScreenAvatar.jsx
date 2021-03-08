import React from "react";
function HomeScreenAvatar(props){
    console.log("Avatar Props: "+props);
    return <img className="home-screen-avatar" src={props.src} alt={props.alt} style={{width: props.width,height: props.height}}/>
}
export default HomeScreenAvatar; 