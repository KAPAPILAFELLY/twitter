import React from "react";
import image5 from "../../images/image 1 (4).svg";

export default function Tweets4() {
    return (
        <div className="tweet">
            <div className="tweet-avatar">
                <img src={image5} alt="" />

            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <h2 className="tweet-title-author">Twetter</h2>
                        <img src="src\images\Vector.png" alt="" />
                        <p className="tweet-title-details">@Twetter . oct 29</p>

                    </div>
                    <div className="tweet-text">
                        <p className="tweet-text">hello literally everyone</p>

                    </div>
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src="src\images\Reply.svg" alt="" />
                            <span>118.7K</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\Retweet.svg" alt="" />
                            <span>85.4K</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\React.svg" alt="" />
                            <span>3.3K</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\Tweet-Replies.svg" alt="" />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
 