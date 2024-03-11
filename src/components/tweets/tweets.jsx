import React from "react";
// import Tweetprofilephoto from "src\images\ tweet-profile-photo.png"
import profile from "../../images/tweet-profile-photo.png";
import Tweets2 from "../function tweets2/tweets2";
import Tweets3 from "../tweets3/tweets3";
import Tweets4 from "../tweets4/tweets4";
import Tweets5 from "../tweets5/tweets5";
import { Link } from "react-router-dom";
function Tweets() {
    return (

        <div className="tweets">
            <div className="tweet">
                <div className="tweet-avatar">
                    <Link to="/Profile5"><img src={profile} alt="" /></Link>
                    {/* {Tweetprofilephoto} */}
                </div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">

                            <h2 className="tweet-title-author">CNN</h2>
                            <img src="src\images\Vector.png" alt="" />
                            <p className="tweet-title-details">@CNN</p>
                            <p className="tweet-title-details">7m</p>



                        </div>

                        <div className="tweet-text">
                            <p className="tweet-text">President Joe Biden touted new agreement reached with the European Union to ease trump-era tariffs on aluminum and steel as a "major breakthough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</p>
                        </div>
                    </div>

                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src="src\images\Reply.svg" alt="" />
                            <span>57</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\Retweet.svg" alt="" />
                            <span>144</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\React.svg" alt="" />
                            <span>187</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\Tweet-Replies.svg" alt="" />
                        </div>

                    </div>
                </div>




            </div>
            <Tweets2 />
            <Tweets3 />
            <Tweets4 />
            <Tweets5 />
        </div>

    )

}


export default Tweets