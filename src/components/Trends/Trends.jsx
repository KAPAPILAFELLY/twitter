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

export default function Trends() {
    return (
        <>
            <div className="Trends">

                <div className="tweet-form">
                    <input className="Trends-input" type="text" name="" id="" placeholder="Serach Tweeter" />


                    <div className="Trends-lists">

                        <h2 className="tweet-title-author">Trends for you</h2><img src="" alt="" />

                        <div className="lists">
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
                    <div className="tweeter-paramettre">
                        <h2 className="tweet-title-author">Trends for you</h2>
                        <img src="" alt="" />
                        <div className="tweet">
                            <div className="tweet-avatar">
                                <img src={image7} alt="" />
                            </div>
                            <div className="Tweet-content">
                                <div className="tweet-body">
                                    <div className="tweet-tittle">
                                        <h2 className="tweet-title-author">The New York Times</h2>
                                        <img src={vector2} alt="" />
                                        <p className="tweet-title-details">@nytimess</p>
                                    </div>

                                </div>

                            </div>

                            <div className="style">
                                <button className="buttonTrends">Follow</button>

                            </div>

                        </div>
                        <div className="tweet">
                            <div className="tweet-avatar">
                                <img src={tweetprofile2} alt="" />
                            </div>

                            <div className="tweet-content">
                                <div className="tweet-body">

                                    <div className="tweet-tittle">
                                        <h2 className="tweet-title-author">CNN</h2>
                                        <img src={vector3} alt="" />
                                        <p className="tweet-title-details">@CNN</p>
                                    </div>
                                </div>
                            </div>
                            <div className="style">
                                <button className="buttonTrends">Follow</button>
                            </div>

                        </div>
                        <div className="tweet">
                            <div className="tweet-avatar">
                                <img src={image8} alt="" />
                            </div>
                            <div className="tweet-content">
                                <div className="tweet-body">

                                    <div className="tweet-tittle">
                                        <h2 className="tweet-title-author">Twitter</h2>
                                        <img src={vector4} alt="" />
                                        <p className="tweet-title-details">@Twitter</p>

                                    </div>
                                </div>
                            </div>
                            <div className="style-trends">
                                <button className="buttonTrends">Follow</button>

                            </div>
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