import React from "react";
import image7 from "../../images/image 1 (2).svg";
import vector2 from "../../images/Vector.png";
import tweetprofile2 from "../../images/tweet-profile-photo.png";
import vector3 from "../../images/Vector.png";
import image8 from "../../images/image 1 (4).svg"
import vector4 from "../../images/Vector.png";
import more1 from "../../images/More-2.svg"
import more2 from "../../images/More-2.svg"
import more3 from "../../images/More-2.svg"
import more4 from "../../images/More-2.svg"
import settings from "../../images/Settings.svg"
import search from "../../images/Search.svg"

export default function Trends() {
    return (
        <>
            <div className="Trends">

                <div className="tweet-form">
                    <div className="Trends-input flex gap-1">
                        <img src={search} alt="" />
                        <input className="bg-transparent border-none w-full outline-none" type="text" name="" id="" placeholder="Serach Tweeter" />
                    </div>


                    <div className="Trends-lists">
                        <div className="settings">
                            <h2 className="tweet-title-lists">Trends for you</h2>
                            <img src={settings} alt="logo" />
                        </div>

                        <div className="trends">
                            <div className="trend-for">
                                <span className="tweet-title-details">Trending in turkey</span>
                                <img src={more1} alt="" />
                            </div>


                            <h2 className="tweet-title-author">#SQUID</h2>
                            <span className="tweet-title-details">2,066 Tweets</span>

                        </div>
                        <div className="trends">
                            <div className="trend-for">
                                <span className="tweet-title-details">Trending in turkey</span>
                                <img src={more2} alt="" />
                            </div>


                            <h2 className="tweet-title-author">#SQUID</h2>
                            <span className="tweet-title-details">2,006 Tweets</span>


                        </div>
                        <div className="turkey">
                            <div className="Tweet-content">

                                <div className="trend-for">
                                    <span className="tweet-title-details">Trending in turkey</span>
                                    <img src={more2} alt="" />
                                </div>
                                <h2 className="tweet-title-author">#SQUID</h2>
                                <span className="tweet-title-details">2,006 Tweets</span>


                            </div>
                            <div className="trend-for">
                                <span className="tweet-title-details">Trending in turkey</span>
                                <img src={more4} alt="" />
                            </div>

                            <h2 className="tweet-title-author">#SQUID</h2>
                            <span className="tweet-title-details">2,006 Tweets</span>

                        </div>
                        <div className="style-text">
                            <p>Show more</p>
                        </div>
                    </div>

                    <div className="Trends-lists">
                        <h2 className="tweet-title-lists">Trends for you</h2>

                        <div className="flex gap-4 my-8">
                            <div className="tweet-avatar">
                                <img src={image7} alt="" />
                            </div>

                            <div className="flex flex-col items-start content-center">
                                <div className="flex">
                                    <h2 className="tweet-title-author">The New York Times</h2>
                                    <img src={vector2} alt="" className="w-5 h-5"/>
                                </div>
                                <p className="tweet-title-details">@nytimess</p>
                            </div>

                            <button className="buttonTrends">Follow</button>    
                                        
                        </div>

                        <div className="flex gap-4 my-8">
                            <div className="tweet-avatar">
                                <img src={tweetprofile2} alt="" className="w-12 h-12" />
                            </div>

                            <div className="flex flex-col items-start mr-14">
                                <div className="flex">
                                    <h2 className="tweet-title-author">CNN</h2>
                                    <img src={vector2} alt="" className="w-5 h-5"/>
                                </div>
                                <p className="tweet-title-details">@CNN</p>
                            </div>

                            <button className="buttonTrends">Follow</button>    
                                        
                        </div>

                        <div className="flex gap-4 my-8">
                            <div className="tweet-avatar">
                                <img src={image8} alt="" className="w-12 h-12" />
                            </div>

                            <div className="flex flex-col items-start mr-10">
                                <div className="flex">
                                    <h2 className="tweet-title-author">Twitter</h2>
                                    <img src={vector2} alt="" className="w-5 h-5"/>
                                </div>
                                <p className="tweet-title-details">@Twitter</p>
                            </div>

                            <button className="buttonTrends">Follow</button>    
                                        
                        </div>


                    

                        <div className="style-text">
                            <p>Show more</p>
                        </div>


                    </div>






                </div>
            </div>
        </>
    )
}