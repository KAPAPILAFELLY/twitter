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
import { Link } from "react-router-dom";
import profile8 from "../../images/profile-photo.png";

export default function Sidebar() {
    return (
        <>
            <div className="listMenu">
                    <li> <img src={twitter} alt="" /></li>
                <ul className="listMenu">
                    <Link to="/"><li><img src={homeFill} alt="" /><span>Home</span></li></Link>
                    <li><img src={explore} alt="" /><span>Explore</span></li>
                    <li><img src={notifications} alt="" /><span>Notificatios</span></li>
                    <li><img src={messags} alt="" /><span>Messages</span></li>
                    <li><img src={bookmarks} alt="" /><span>Bookmarks</span></li>
                    <li><img src={lists} alt="" /><span>Lists</span></li>
                    <Link to="/Profile"><li><img src={profile} alt="" /><span>Profile</span></li></Link>
                    <li><img src={more} alt="" /><span>More</span></li>
                </ul>
                <div className="style-Sidebar">
                    <button className="buttonSidebar">
                        Tweet
                    </button>
                </div>
                <div className="flex items-start listMenu">
                    <div className="flex">                     
                        <Link><img src={profile8} alt="" className="w-14 h-14" /></Link>
                    </div>
                    <div>
                    <h2 className="tweet-title-author">Felly Kapapila</h2>
                        <span className="tweet-title-details flex">@KapapilaFelly</span>
                    </div>
                </div>
            </div>

        </>

    )
}
