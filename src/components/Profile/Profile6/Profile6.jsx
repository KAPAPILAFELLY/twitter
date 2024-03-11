import React from "react";
import profile from "../../../images/profile-photo.png"
import { Link } from "react-router-dom";

export default function Profile6() {
    return (
        <div>
            <div className="header">
                <h1 class="font-bold">Kapapila</h1>
            </div>
            <div className="bg-red-500  py-28"  >
                <div className="flex flex-row justify-between  content-center items-center -mb-[20rem] mt-12 ml-8 ">
                    <img src={profile} alt="" className="w-32  " />
                    <button className="buttonTrends w-24 ">Edit profile</button>
                </div>
            </div>
            <div className="profile6">
                <div className="mt-[8rem] ml-auto">
                    <h1 class="font-bold ">Felly Kapapila</h1>
                    <span className="tweet-title-details">@KapapilaFelly</span>
                </div>
                <div className="">
                <span className="tweet-title-details">Joined january 2024</span>
            </div>
            <div className="flex">
                <span className="tweet-title-details">4</span>
                <Link><p className="tweet-title-details">Following</p></Link>
                <span className="tweet-title-details">0</span>
                <Link><p className="tweet-title-details">Followers</p></Link>
            </div>
            <div className="tweet-action">
                <Link><span className="tweet-title-details font-bold">Post</span></Link>
                <Link><span className="tweet-title-details font-bold">Replies</span></Link>
                <Link><span className="tweet-title-details font-bold">Highights</span></Link>
                <Link><span className="tweet-title-details font-bold">Media</span></Link>
                <Link><span className="tweet-title-details font-bold">Likes</span></Link>
            </div>

            </div>

            
           
            
        </div>

    )
}