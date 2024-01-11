import React from "react";
import image1 from "../../images/image 1 (3).svg";


function Tweets2() {
    return (
        <div className="tweet">
            <div className="tweet-avatar">
                <img src={image1} alt="" />
            </div> 
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <h2 className="tweet-title-author">The New York </h2>
                        <img src="src\images\Vector.png" alt="" />
                        <p className="tweet-title-details">@nytimes . 2h</p>
                    </div>

                    <div className="tweet-text">
                        <p className="tweet-text">Gardenig boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land.</p>

                    </div>
                    <div className="tweet-image">
                        <img src="src\images\tweet-image.png" alt="" />
                        {/*image*/}
                    </div>
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src="src\images\Reply.svg" alt="" />
                            <span>19</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\Retweet.svg" alt="" />
                            <span>48</span>
                        </div>
                        <div className="tweet-action">
                            <img src="src\images\React.svg" alt="" />
                            <span>482</span>
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

export default Tweets2 