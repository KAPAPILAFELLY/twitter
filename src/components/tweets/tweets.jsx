import React, { useState } from "react";
// import Tweetprofilephoto from "src\images\ tweet-profile-photo.png"
import profile from "../../images/tweet-profile-photo.png";
import Tweets2 from "../function tweets2/tweets2";
import Tweets3 from "../tweets3/tweets3";
import Tweets4 from "../tweets4/tweets4";
import Tweets5 from "../tweets5/tweets5";
import { Link } from "react-router-dom";
import Tweet from "../tweet";
function Tweets() {
    const [like, setLike] = useState(186)
    const [verify, setVerify] = useState(false)

    function addtweet() {
        if (verify !== false) {
            setLike(like - 1)
            setVerify(false)
            console.log('false')
        } else {
            setLike(like + 1)
            setVerify(true)
            console.log('true')
        }
    }
    return (
        <div>
            <Tweet titleAuthor="CNN" imagesAuthor="src\images\Vector.png" titleDetails="@CNN . 7m" reply="54" retweet="14" like="186" tweet="45" tweetText="President Joe Biden touted new agreement reached with the European Union to ease trump-era tariffs on aluminum and steel as a major breakthough that would serve to both strengthen the US steel industry and combat the global climate crisis" imagesAvatar="src\images\tweet-profile-photo.png" />
            <Tweet titleAuthor="The New York" imagesAuthor="src\images\Vector.png" titleDetails="@nytimes . 2h" reply="19" retweet="48" like="181" tweet="30" tweetText="Gardenig boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land." imagesAvatar="src\images\image 1 (3).svg" tweetImage="src\images\tweet-image.png" />
            <Tweet titleAuthor="Twetter" imagesAuthor="src\images\Vector.png" titleDetails="@Twetter . oct 29" reply="6.6k" retweet="36.8k" like="268" tweet="25" tweetText="BIG NEWs lol jk still Twetter" imagesAvatar="src\images\image 1 (4).svg" />
            <Tweet titleAuthor="Twetter" imagesAuthor="src\images\Vector.png" titleDetails="@Twetter . oct 29" reply="118.4k" retweet="84.7k" like="10" tweet="50" tweetText="hello literally everyone" imagesAvatar="src\images\image 1 (4).svg" />
            <Tweet titleAuthor="Tweeter" imagesAuthor="src\images\Vector.png" titleDetails="@Twetter . oct 29" reply="118.7" retweet="785.4" like="17" tweet="33" tweetImage="src\images\tweet-image.png" tweetText="hello literally everyone" imagesAvatar="src\images\image 1 (4).svg" />
        </div>

    )

}


export default Tweets