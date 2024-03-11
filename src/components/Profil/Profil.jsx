import React from "react";
// import profile from "../../images/profile-photo.png"
// import Header from "../header/header";
import Trends from "../Trends/Trends";
// import Tweets from "../tweets/tweets";
import Sidebar from "../Sidebar/Sidebar";
import Profile2 from "./Profile2/Profile2";
// import Profile2 from "./Profile2/Profile2";
// import Profile3 from "./Profile3/Profile3";
import Profile3 from "./Profile2/Profile3";


export default function Profil() {
    return (<>
        <Sidebar/>
    

    <main className="timeline">
        <Profile2 />
        <Profile3 />
        
    
    </main>
    <Trends/>
    </>
    )
}
