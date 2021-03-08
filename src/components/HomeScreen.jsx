import React from "react";
import ReactDOM from "react-dom"; 
import App from "./App"; 
import HomeScreenButton from "./HomeScreenButton";
import HomeScreenAvatar from "./HomeScreenAvatar"

function renderApp(){
    ReactDOM.render(<App />, document.getElementById("root"));
}
function HomeScreen() {
    return <div style={{margin: "auto 0 auto 0" }}>
        
        <div className="home-buttons">
            <div className="home-top-container">
                <div className="home-image">
                    <button onClick={renderApp} className="playButton">Play</button>
                    <HomeScreenAvatar className="" src="../../../assets/4inarow@2x.png" alt="connect-four" width="350px" height="360px" />
                </div>
            </div>
            
            <div className="home-buttons-top">
                <HomeScreenButton  color="#FFFFFF" text="Custom Game" background="#4BABFF 0% 0% no-repeat padding-box" />
                <HomeScreenButton  color="#FFFFFF" text="Two Players" background="#4B7BFF 0% 0% no-repeat padding-box" />
            </div>
            <div className="home-buttons-bottom">
                <HomeScreenButton  color="#FFFFFF" text="Game Online" background="#4B4BFF 0% 0% no-repeat padding-box" />
                <HomeScreenButton  color="#FFFFFF" text="Training Game" background="#6E4BFF 0% 0% no-repeat padding-box" />
            </div>
        </div>
    </div>;
}
export default HomeScreen; 