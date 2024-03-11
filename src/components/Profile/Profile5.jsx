import React from "react";
// import profile from "../../images/profile-photo.png"
// import Header from "../header/header";
import Trends from "../Trends/Trends";
// import Tweets from "../tweets/tweets";
import Sidebar from "../Sidebar/Sidebar";
// import Profile2 from "./Profile2/Profile2";
// import Profile2 from "./Profile2/Profile2";
import Profile6 from "./Profile6/Profile6";
import Profile7 from "./Profile7/Profile7";


export default function Profile5() {
    return (<>
        <Sidebar/>
    

    <main className="timeline">
        {/* <C /> */}
        <Profile6 />
        <Profile7 />
        
    
    </main>
    <Trends/>
    </>
    )
}
