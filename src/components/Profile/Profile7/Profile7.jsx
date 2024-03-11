import React from "react";
import Profil from "../../../images/Profile.svg"

export default function Profile7() {
    return (
        <div className="tweets">
            <div className="tweet">
                <div className="tweet-avatar">
                    <img src={Profil} alt="" />
                </div>
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">

                        <h2 className="tweet-title-author">CNN</h2>
                        <img src="src\images\Vector.png" alt="" />
                        <p className="tweet-title-details">@CNN</p>
                        <p className="tweet-title-details">7m</p>

                    </div>
                </div>
            </div>
        </div>
    )
}