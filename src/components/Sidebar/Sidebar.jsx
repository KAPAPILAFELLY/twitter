import React from "react";
import twitter from "../../images/Twitter.svg";
import homeFill from "../../images/Home-Fill.svg";
import explore from "../../images/Explore.svg";
import notifications from "../../images/Notifications.svg";
import messags from "../../images/Messages.svg";
import bookmarks from "../../images/Bookmarks.svg";
import lists from "../../images/Lists.svg";
import profile from "../../images/Profile.svg";
import more from "../../images/More.svg"

export default function Sidebar() {
    return(
        <>
     <div className="Sidebar">
        <img src={twitter} alt="" />
        <ul className="listMenu">
            <li><img src={homeFill} alt="" /><span>Home</span></li>
            <li><img src={explore} alt="" /><span>Explore</span></li>
            <li><img src={notifications} alt="" /><span>Notificatios</span></li>
            <li><img src={messags} alt="" /><span>Messages</span></li>
            <li><img src={bookmarks} alt="" /><span>Bookmarks</span></li>
            <li><img src={lists} alt="" /><span>Lists</span></li>
            <li><img src={profile} alt="" /><span>Profile</span></li>
            <li><img src={more} alt="" /><span>More</span></li>
        </ul>
        <div className="style-Sidebar">
       <button className="buttonSidebar">
        Tweet
        </button>
     </div>
     </div>
     
     </>
    
    )
}
